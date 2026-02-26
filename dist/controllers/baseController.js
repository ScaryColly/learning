"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(model) {
        this.model = model;
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = req.query;
            try {
                if (filter) {
                    const filterData = yield this.model.find(filter);
                    res.json(filterData);
                }
                else {
                    const data = yield this.model.find();
                    res.json(data);
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id);
            try {
                const movie = yield this.model.findById(id);
                if (movie) {
                    res.json(movie);
                }
                else {
                    res.status(404).json({ message: "Movie not found" });
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newObject = req.body;
            console.log(newObject);
            try {
                const response = yield this.model.create(newObject);
                res.status(201).json(response);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    del(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const deletedObject = yield this.model.findByIdAndDelete(id);
                if (deletedObject) {
                    res.json({ message: "Object deleted successfully" });
                }
                else {
                    res.status(404).json({ message: "Object not found" });
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const updatedObject = req.body;
            console.log(id, updatedObject);
            try {
                const object = yield this.model.findByIdAndUpdate(id, updatedObject, {
                    new: true,
                });
                if (object) {
                    res.json(object);
                }
                else {
                    res.status(404).json({ message: "Object not found" });
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=baseController.js.map