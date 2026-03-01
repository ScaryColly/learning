import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export type AuthRequest = Request & { user?: { id: string } };

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const secret: string = process.env.JWT_SECRET || "default-secret";
  try {
    const decoded = jwt.verify(token, secret) as { userId: string };

    req.user = { id: decoded.userId };
    next();
  } catch (err) {
    return res.status(403).json({ message: err });
  }
};
