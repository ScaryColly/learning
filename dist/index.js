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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const moviesRoutes_1 = require("./routes/moviesRoutes");
const commentsRoutes_1 = require("./routes/commentsRoutes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(MONGO_URI);
            console.log("✅ Connected to MongoDB");
        }
        catch (err) {
            console.error("❌ Failed to connect to MongoDB:", err);
            process.exit(1);
        }
    });
}
startServer();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/movies", moviesRoutes_1.moviesRoutes);
app.use("/movies", commentsRoutes_1.commentsRoutes);
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map