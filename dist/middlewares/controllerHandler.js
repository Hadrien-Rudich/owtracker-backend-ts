"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllerHandler = (controller) => async (req, res, next) => {
    try {
        controller(req, res, next);
    }
    catch (err) {
        next(err);
    }
};
exports.default = controllerHandler;
