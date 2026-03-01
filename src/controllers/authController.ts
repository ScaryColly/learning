import { Request, Response } from "express";
import { User } from "../model/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const sendError = (res: Response, message: string, code?: number) => {
  const errCode = code || 400;
  res.status(errCode).json({ error: message });
};

type Tokens = {
  token: string;
  refreshToken: string;
};

const generateToken = ({
  userId,
  email,
}: {
  userId: string;
  email: string;
}): Tokens => {
  const secret = process.env.JWT_SECRET || "secret";

  const token = jwt.sign({ userId, email }, secret, {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign({ userId, email }, secret, {
    expiresIn: "1d",
  });

  return { token, refreshToken };
};

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendError(res, "Email and password are required");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hashedPassword });

    const tokens = generateToken({ userId: user._id.toString(), email });
    user.refreshTokens.push(tokens.refreshToken);
    await user.save();

    res.status(201).json({ user, tokens });
  } catch (error) {
    sendError(res, "Failed to create user", 401);
    console.log("Error creating user:", error);
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendError(res, "Email and password are required");
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return sendError(res, "Invalid email or password");
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendError(res, "Invalid email or password");
    }

    // Generate a JWT token
    const tokens = generateToken({
      userId: user._id.toString(),
      email: user.email,
    });
    user.refreshTokens.push(tokens.refreshToken);
    await user.save();

    res.json({ user, tokens });
  } catch (error) {
    sendError(res, "Failed to login user");
    console.log("Error logging in user:", error);
  }
};

const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return sendError(res, "Refresh token is required");
  }

  try {
    const secret = process.env.JWT_SECRET || "secret";
    const decoded = jwt.verify(refreshToken, secret) as {
      userId: string;
      email: string;
    };

    const user = await User.findById(decoded.userId);
    if (!user) {
      return sendError(res, "User not found");
    }

    if (!user.refreshTokens.includes(refreshToken)) {
      //remove all refresh tokens for the user
      user.refreshTokens = [];
      await user.save();
      return sendError(res, "Invalid refresh token");
    }

    const tokens = generateToken({
      userId: user._id.toString(),
      email: user.email,
    });
    user.refreshTokens.push(tokens.refreshToken);
    //remove the old refresh token
    user.refreshTokens = user.refreshTokens.filter(
      (token) => token !== refreshToken,
    );
    await user.save();

    res.json({ tokens });
  } catch (error) {
    sendError(res, "Failed to refresh token");
    console.log("Error refreshing token:", error);
  }
};

export const authController = {
  register,
  login,
  refreshToken,
};
