import express from "express";
import { commentsController } from "../controllers/commentsController";
import { authMiddleware } from "../middleware/authMiddleware";

export const commentsRoutes = express.Router();

commentsRoutes.get("/", (req, res) => {
  commentsController.getAll(req, res);
});

commentsRoutes.get("/:id", (req, res) => {
  commentsController.getById(req, res);
});

commentsRoutes.post("/", authMiddleware, (req, res) => {
  commentsController.post(req, res);
});

commentsRoutes.delete("/:id", authMiddleware, (req, res) => {
  commentsController.del(req, res);
});

commentsRoutes.put("/:id", authMiddleware, (req, res) => {
  commentsController.put(req, res);
});
