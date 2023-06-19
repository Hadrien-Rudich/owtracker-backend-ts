"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.UserSchema = {
    login: joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string()
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            .required()
            .messages({
            'string.pattern.base': `{{#label}} must meet the following format: 1 uppercase, 1 lowercase,1 digit, 1 special char, 8 char min, 25 char max`,
        }),
    }),
    register: joi_1.default.object({
        email: joi_1.default.string().email().required(),
        battleTag: joi_1.default.string()
            .pattern(/^(?=.*[#])[A-Za-z\d#]{3,20}$/)
            .required()
            .messages({
            'string.pattern.base': `{{#label}} must meet the following format: 1 #, 1 letter, 1 digit, 3 chars min, 20 chars max`,
        }),
        password: joi_1.default.string()
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/)
            .required()
            .messages({
            'string.pattern.base': `{{#label}} must meet the following format: 1 uppercase, 1 lowercase,1 digit, 1 special char, 8 char min, 25 char max`,
        }),
    }),
    update: joi_1.default.object({
        email: joi_1.default.string().email(),
        battleTag: joi_1.default.string()
            .pattern(/^(?=.*[#])[A-Za-z\d#]{3,20}$/)
            .messages({
            'string.pattern.base': `{{#label}} must meet the following format: 1 #, 1 letter, 1 digit, 3 chars min, 20 chars max`,
        }),
    }),
    updatePassword: joi_1.default.object({
        password: joi_1.default.string()
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/)
            .required()
            .messages({
            'string.pattern.base': `{{#label}} must meet the following format: 1 uppercase, 1 lowercase,1 digit, 1 special char, 8 char min, 25 char max`,
        }),
        newPassword: joi_1.default.string()
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/)
            .required()
            .messages({
            'string.pattern.base': `{{#label}} must meet the following format: 1 uppercase, 1 lowercase,1 digit, 1 special char, 8 char min, 25 char max`,
        }),
    }),
};
