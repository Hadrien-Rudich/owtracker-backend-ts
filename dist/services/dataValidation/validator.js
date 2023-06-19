"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = void 0;
const validateData = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            const errorMessage = error.message;
            return res.status(400).json({ error: errorMessage });
        }
    };
};
exports.validateData = validateData;
