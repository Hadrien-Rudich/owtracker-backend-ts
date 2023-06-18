"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../../controllers/users/userController");
const userRouter = (0, express_1.Router)();
userRouter.route('/').get(userController_1.userController.getUserAccounts);
userRouter
    .route('/:id')
    .get(userController_1.userController.getUserAccount)
    .patch(userController_1.userController.updateUserAccount)
    .delete(userController_1.userController.deleteUserAccount);
exports.default = userRouter;
