"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const error_1 = require("../models/error");
async function hashPassword(password) {
    const salt = await bcrypt_1.default.genSalt(10);
    const hash = await bcrypt_1.default.hash(password, salt);
    return hash;
}
exports.hashPassword = hashPassword;
async function comparePasswords(plainPassword, hashedPassword) {
    const passwordComparison = await bcrypt_1.default.compare(plainPassword, hashedPassword);
    if (!passwordComparison) {
        throw new error_1.InvalidCredentials('Invalid Credentials');
    }
}
exports.comparePasswords = comparePasswords;
