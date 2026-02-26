import { Movie } from "../model/movieModel";
import { BaseController } from "./baseController";

export const moviesController = new BaseController(Movie);
