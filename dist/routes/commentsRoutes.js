"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const commentsController_1 = require("../controllers/commentsController");
exports.commentsRoutes = express_1.default.Router();
exports.commentsRoutes.get("/", (req, res) => {
    commentsController_1.commentsController.getAll(req, res);
});
exports.commentsRoutes.get("/:id", (req, res) => {
    commentsController_1.commentsController.getById(req, res);
});
exports.commentsRoutes.post("/", (req, res) => {
    commentsController_1.commentsController.post(req, res);
});
exports.commentsRoutes.delete("/:id", (req, res) => {
    commentsController_1.commentsController.del(req, res);
});
exports.commentsRoutes.put("/:id", (req, res) => {
    commentsController_1.commentsController.put(req, res);
});
//# sourceMappingURL=commentsRoutes.js.map