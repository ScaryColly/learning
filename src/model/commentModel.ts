import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

export const Comment = model("Comment", commentSchema);
