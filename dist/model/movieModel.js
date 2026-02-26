"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    }
});
exports.Movie = (0, mongoose_1.model)('Movie', movieSchema);
//# sourceMappingURL=movieModel.js.map