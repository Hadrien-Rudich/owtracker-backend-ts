"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../configuration/config");
const error_1 = require("../models/error");
async function authenticateToken(req, _res, next) {
    try {
        const cookieHeader = req.headers['cookie'];
        const token = extractTokenFromCookie(cookieHeader);
        if (token === undefined) {
            throw new error_1.UserNotConnectedError();
        }
        const user = await new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, config_1.config.accessToken, (err, user) => {
                if (err) {
                    reject(new error_1.InvalidTokenError());
                }
                else {
                    resolve(user);
                }
            });
        });
        req.user = user;
        next();
    }
    catch (error) {
        next(error);
    }
}
exports.authenticateToken = authenticateToken;
function extractTokenFromCookie(cookieHeader) {
    if (cookieHeader) {
        const cookies = cookieHeader.split(';');
        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'jwt') {
                return value;
            }
        }
    }
    return undefined;
}
