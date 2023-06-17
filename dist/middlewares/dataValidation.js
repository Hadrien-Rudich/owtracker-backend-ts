"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.validateData = void 0;
const joi_1 = __importDefault(require("joi"));
const validateData = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            console.log(error);
            return res.status(422).json({ error });
        }
    };
};
exports.validateData = validateData;
exports.userSchema = {
    userObject: joi_1.default.object({
        email: joi_1.default.string().email().required(),
        // battleTag: Joi.string()
        //   .pattern(/^(?![0-9])[a-zA-Z0-9À-ÿ]{3,12}$/)
        //   // Must start with a char that is not a number
        //   // Can consist of alphanumeric char (upper/lowercase) and accented chars
        //   // Must have a length between 3 and 12 chars
        //   .required(),
        password: joi_1.default.string()
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            // Must have one lowercase letter
            // Must have one uppercase letter
            // Must have one digit
            // Must have one special char from the set (@$!%*?&).
            // Min length of 8 characters
            .required(),
    }),
};
