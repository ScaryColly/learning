import { Response } from "express";
import { Movie } from "../model/movieModel";
import { BaseController } from "./baseController";
import { AuthRequest } from "../middleware/authMiddleware";

// const moviesController = new BaseController(Movie);

class MoviesController extends BaseController {
  constructor() {
    super(Movie);
  }

  async post(req: AuthRequest, res: Response) {
    const userId = req.user?.id;
    req.body.createdBy = userId;

    return super.post(req, res);
  }

  async put(req: AuthRequest, res: Response) {
    const userId = req.user?.id;
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }

    if (movie.createdBy.toString() !== userId) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    return super.put(req, res);
  }

  async del(req: AuthRequest, res: Response) {
    const userId = req.user?.id;
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }

    if (movie.createdBy.toString() !== userId) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    return super.del(req, res);
  }
}

export const moviesController = new MoviesController();
