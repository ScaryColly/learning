import { Comment } from "../model/commentModel";
import { BaseController } from "./baseController";

export const commentsController = new BaseController(Comment);
