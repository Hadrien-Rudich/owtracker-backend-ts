"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.GamesSchema = {
    create: joi_1.default.object({
        user: joi_1.default.number().required(),
        profile: joi_1.default.string().required(),
        result: joi_1.default.string().required(),
        map: joi_1.default.string().required(),
        mapType: joi_1.default.string().required(),
        mapImageUrl: joi_1.default.string().required(),
        heroes: joi_1.default.array().items(joi_1.default.string()).required(),
        heroesImageUrl: joi_1.default.array().items(joi_1.default.string()).required(),
    }),
    update: joi_1.default.object({
        profile: joi_1.default.string(),
        result: joi_1.default.string(),
        map: joi_1.default.string(),
        mapType: joi_1.default.string(),
        mapImageUrl: joi_1.default.string(),
        heroes: joi_1.default.array().items(joi_1.default.string()),
        heroesImageUrl: joi_1.default.array().items(joi_1.default.string()),
    }),
};
