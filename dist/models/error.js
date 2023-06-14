"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = exports.InternalServerError = exports.NotFoundError = exports.BadRequestError = void 0;
class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.CustomError = CustomError;
class BadRequestError extends CustomError {
    constructor(message) {
        super(message, 400);
        this.name = 'BadRequestError';
        this.message = 'Invalid Request';
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends CustomError {
    constructor(message) {
        super(message, 404);
        this.name = 'NotFoundError';
        this.message = 'Could not find entry';
    }
}
exports.NotFoundError = NotFoundError;
class InternalServerError extends CustomError {
    constructor(message) {
        super(message, 500);
        this.name = 'InternalServerError';
        this.message = 'Internal Server Error';
    }
}
exports.InternalServerError = InternalServerError;
