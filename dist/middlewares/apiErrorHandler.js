"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = void 0;
const apiErrorHandler = (error, _req, res, next) => {
    res.status(error.status || 500);
    res.send({ error: true, message: error.message || 'Internal Server Error' });
};
exports.apiErrorHandler = apiErrorHandler;
