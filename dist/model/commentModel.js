"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    movieId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.Comment = (0, mongoose_1.model)("Comment", commentSchema);
//# sourceMappingURL=commentModel.js.map