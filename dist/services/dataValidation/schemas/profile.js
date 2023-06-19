"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ProfileSchema = {
    create: joi_1.default.object({
        label: joi_1.default.string()
            .pattern(/^[\s\S]{3,20}$/)
            .required()
            .messages({
            'string.pattern.base': `{{#label}} must meet the following format: 3 chars min, 20 chars max`,
        }),
    }),
    update: joi_1.default.object({
        label: joi_1.default.string()
            .pattern(/^[\s\S]{3,20}$/)
            .required()
            .messages({
            'string.pattern.base': `{{#label}} must meet the following format: 3 chars min, 20 chars max`,
        }),
    }),
};
