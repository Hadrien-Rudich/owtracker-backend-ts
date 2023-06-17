"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataValidationController = void 0;
exports.dataValidationController = {
    async sampleRoute(req, res, next) {
        try {
            const userCredentials = req.body;
            res.status(200).json({ userCredentials: req.body });
        }
        catch (error) {
            next(error);
        }
    },
};
