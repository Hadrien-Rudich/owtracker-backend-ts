"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = exports.corsConfig = void 0;
const cors_1 = __importDefault(require("cors"));
exports.corsConfig = {
    origin: [
        'http://127.0.0.1:5173',
        'http://localhost:5173',
        'http://localhost:3002',
        'http://127.0.0.1:3002',
    ],
    methods: 'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
};
exports.corsMiddleware = (0, cors_1.default)(exports.corsConfig);
