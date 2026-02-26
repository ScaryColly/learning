import express from "express";
import { commentsController } from "../controllers/commentsController";

export const commentsRoutes = express.Router();

commentsRoutes.get("/", (req, res) => {
  commentsController.getAll(req, res);
});

commentsRoutes.get("/:id", (req, res) => {
  commentsController.getById(req, res);
});

commentsRoutes.post("/", (req, res) => {
  commentsController.post(req, res);
});

commentsRoutes.delete("/:id", (req, res) => {
  commentsController.del(req, res);
});

commentsRoutes.put("/:id", (req, res) => {
  commentsController.put(req, res);
});
