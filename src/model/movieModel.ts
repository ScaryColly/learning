import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  releaseYear: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Movie = model("Movie", movieSchema);
