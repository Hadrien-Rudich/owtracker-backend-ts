"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const config_1 = require("../../configuration/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function generateAccessToken(user) {
    return jsonwebtoken_1.default.sign(user, config_1.config.accessToken, { expiresIn: '1d' });
}
exports.generateAccessToken = generateAccessToken;
async function generateRefreshToken(user) {
    return jsonwebtoken_1.default.sign(user, config_1.config.refreshToken, { expiresIn: '1d' });
}
exports.generateRefreshToken = generateRefreshToken;
