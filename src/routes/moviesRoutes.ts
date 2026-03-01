import express from "express";
import { moviesController } from "../controllers/moviesController";
import { authMiddleware } from "../middleware/authMiddleware";

export const moviesRoutes = express.Router();

moviesRoutes.get("/", (req, res) => {
  moviesController.getAll(req, res);
});

moviesRoutes.get("/:id", (req, res) => {
  moviesController.getById(req, res);
});

moviesRoutes.post("/", authMiddleware, (req, res) => {
  moviesController.post(req, res);
});

moviesRoutes.delete("/:id", authMiddleware, (req, res) => {
  moviesController.del(req, res);
});

moviesRoutes.put("/:id", authMiddleware, (req, res) => {
  moviesController.put(req, res);
});
