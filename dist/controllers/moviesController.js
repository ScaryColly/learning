"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
const movieModel_1 = require("../model/movieModel");
const baseController_1 = require("./baseController");
exports.moviesController = new baseController_1.BaseController(movieModel_1.Movie);
//# sourceMappingURL=moviesController.js.map