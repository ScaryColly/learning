"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsController = void 0;
const commentModel_1 = require("../model/commentModel");
const baseController_1 = require("./baseController");
exports.commentsController = new baseController_1.BaseController(commentModel_1.Comment);
//# sourceMappingURL=commentsController.js.map