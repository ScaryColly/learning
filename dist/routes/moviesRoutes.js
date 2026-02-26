"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const moviesController_1 = require("../controllers/moviesController");
exports.moviesRoutes = express_1.default.Router();
exports.moviesRoutes.get("/", (req, res) => {
    moviesController_1.moviesController.getAll(req, res);
});
exports.moviesRoutes.get("/:id", (req, res) => {
    moviesController_1.moviesController.getById(req, res);
});
exports.moviesRoutes.post("/", (req, res) => {
    moviesController_1.moviesController.post(req, res);
});
exports.moviesRoutes.delete("/:id", (req, res) => {
    moviesController_1.moviesController.del(req, res);
});
exports.moviesRoutes.put("/:id", (req, res) => {
    moviesController_1.moviesController.put(req, res);
});
//# sourceMappingURL=moviesRoutes.js.map