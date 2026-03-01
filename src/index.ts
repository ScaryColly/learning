import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import { commentsRoutes, authRoutes, moviesRoutes } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

startServer();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// swagger documentation route
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/movies", moviesRoutes);
app.use("/movies", commentsRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
