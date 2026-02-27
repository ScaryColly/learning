import express from "express";
import { moviesController } from "../controllers/moviesController";

export const moviesRoutes = express.Router();

moviesRoutes.get("/", (req, res) => {
  moviesController.getAll(req, res);
});

moviesRoutes.get("/:id", (req, res) => {
  moviesController.getById(req, res);
});

moviesRoutes.post("/", (req, res) => {
  moviesController.post(req, res);
});

moviesRoutes.delete("/:id", (req, res) => {
  moviesController.del(req, res);
});

moviesRoutes.put("/:id", (req, res) => {
  moviesController.put(req, res);
});
