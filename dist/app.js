"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./configuration/config");
const router_1 = __importDefault(require("./routes/router"));
const apiErrorHandler_1 = require("./middlewares/apiErrorHandler");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = require("./configuration/cors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.corsMiddleware);
app.use((0, helmet_1.default)());
// app.use(accessControl);
app.use(router_1.default);
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(config_1.config.port, () => {
    console.log(`Example app listening at http://localhost:${config_1.config.port}`);
});
