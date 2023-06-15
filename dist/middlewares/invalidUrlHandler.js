"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invalidUrlHandler = (req, res, next) => {
    const error = new Error(`URL not found ( ${req.method} --> ${req.originalUrl} )`);
    res.status(404).json({ error: error.message });
};
exports.default = invalidUrlHandler;
