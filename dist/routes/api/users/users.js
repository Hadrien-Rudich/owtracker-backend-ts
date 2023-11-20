"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../../controllers/users/userController");
const validator_1 = require("../../../services/dataValidation/validator");
const user_1 = require("../../../services/dataValidation/schemas/user");
const userRouter = (0, express_1.Router)();
userRouter.route('/').get(userController_1.userController.getUsers);
userRouter
    .route('/:id')
    .get(userController_1.userController.getUser)
    .delete(userController_1.userController.deleteUser);
userRouter
    .route('/:id/details')
    .patch((0, validator_1.validateData)(user_1.UserSchema.update), userController_1.userController.updateUserEmail);
userRouter
    .route('/:id/security')
    .patch((0, validator_1.validateData)(user_1.UserSchema.updatePassword), userController_1.userController.updateUserPassword);
exports.default = userRouter;
