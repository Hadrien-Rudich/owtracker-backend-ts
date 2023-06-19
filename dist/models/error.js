"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordError = exports.EmailInUseError = exports.InvalidCredentialsError = exports.CustomError = exports.InternalServerError = exports.NotFoundError = exports.BadRequestError = void 0;
class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status || 500;
        this.name = this.constructor.name;
        if (!message) {
            this.setDefaultMessage();
        }
    }
    setDefaultMessage() {
        this.message = 'An error occurred.';
    }
}
exports.CustomError = CustomError;
class BadRequestError extends CustomError {
    constructor(message) {
        super(message || 'Invalid Request', 400);
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends CustomError {
    constructor(message) {
        super(message || 'Could not find entry', 404);
    }
}
exports.NotFoundError = NotFoundError;
class InternalServerError extends CustomError {
    constructor(message) {
        super(message || 'Internal Server Error', 500);
    }
}
exports.InternalServerError = InternalServerError;
class InvalidCredentialsError extends CustomError {
    constructor(message) {
        super(message || 'Authentication Failed', 401);
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
class InvalidPasswordError extends CustomError {
    constructor(message) {
        super(message || 'Invalid password', 401);
    }
}
exports.InvalidPasswordError = InvalidPasswordError;
class EmailInUseError extends CustomError {
    constructor(message) {
        super(message || 'Email is already in use', 200);
    }
}
exports.EmailInUseError = EmailInUseError;
