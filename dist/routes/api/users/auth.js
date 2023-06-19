"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../../../controllers/users/authController");
const userController_1 = require("../../../controllers/users/userController");
const validator_1 = require("../../../services/dataValidation/validator");
const user_1 = require("../../../services/dataValidation/schemas/user");
const authRouter = (0, express_1.Router)();
authRouter
    .route('/login')
    .post((0, validator_1.validateData)(user_1.UserSchema.login), authController_1.authController.logIn);
authRouter
    .route('/register')
    .post((0, validator_1.validateData)(user_1.UserSchema.register), userController_1.userController.registerUserAccount);
exports.default = authRouter;
