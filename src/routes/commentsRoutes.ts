import express from "express";
import { commentsController } from "../controllers/commentsController";
import { authMiddleware } from "../middleware/authMiddleware";

export const commentsRoutes = express.Router();

/**
 * @swagger
 * /movies/comments:
 *   get:
 *     summary: Retrieve all comments
 *     tags:
 *       - Comments
 *     responses:
 *       200:
 *         description: A list of comments.
 */
commentsRoutes.get("/", (req, res) => {
  commentsController.getAll(req, res);
});

/**
 * @swagger
 * /movies/comments/{id}:
 *   get:
 *     summary: Retrieve a comment by ID
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single comment.
 */
commentsRoutes.get("/:id", (req, res) => {
  commentsController.getById(req, res);
});

/**
 * @swagger
 * /movies/comments:
 *   post:
 *     summary: Create a new comment
 *     tags:
 *       - Comments
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               movieId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment created.
 */
commentsRoutes.post("/", authMiddleware, (req, res) => {
  commentsController.post(req, res);
});

/**
 * @swagger
 * /movies/comments/{id}:
 *   delete:
 *     summary: Delete a comment
 *     tags:
 *       - Comments
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
 *         description: Comment deleted.
 */
commentsRoutes.delete("/:id", authMiddleware, (req, res) => {
  commentsController.del(req, res);
});

/**
 * @swagger
 * /movies/comments/{id}:
 *   put:
 *     summary: Update a comment
 *     tags:
 *       - Comments
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
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment updated.
 */
commentsRoutes.put("/:id", authMiddleware, (req, res) => {
  commentsController.put(req, res);
});
