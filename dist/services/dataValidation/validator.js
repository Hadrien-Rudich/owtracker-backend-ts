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
            console.log(error);
            return res.status(422).json({ error });
        }
    };
};
exports.validateData = validateData;
