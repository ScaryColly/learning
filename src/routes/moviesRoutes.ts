import express from "express";
import { moviesController } from "../controllers/moviesController";
import { authMiddleware } from "../middleware/authMiddleware";

export const moviesRoutes = express.Router();

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Retrieve a list of movies
 *     tags:
 *       - Movies
 *     responses:
 *       200:
 *         description: A list of movies.
 */
moviesRoutes.get("/", (req, res) => {
  moviesController.getAll(req, res);
});

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Retrieve a movie by ID
 *     tags:
 *       - Movies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single movie.
 */
moviesRoutes.get("/:id", (req, res) => {
  moviesController.getById(req, res);
});

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags:
 *       - Movies
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Movie created.
 */
moviesRoutes.post("/", authMiddleware, (req, res) => {
  moviesController.post(req, res);
});

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags:
 *       - Movies
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Movie deleted.
 */
moviesRoutes.delete("/:id", authMiddleware, (req, res) => {
  moviesController.del(req, res);
});

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags:
 *       - Movies
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Movie updated.
 */
moviesRoutes.put("/:id", authMiddleware, (req, res) => {
  moviesController.put(req, res);
});
