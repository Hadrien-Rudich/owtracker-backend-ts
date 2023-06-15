"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => {
    res.status(error.status || 500);
    res.send({ error: true, message: error.message || 'Internal Server Error' });
};
exports.errorHandler = errorHandler;
