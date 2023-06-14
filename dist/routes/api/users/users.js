"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../../controllers/users/userController");
const userRouter = (0, express_1.Router)();
userRouter
    .route('/')
    .get(userController_1.userController.getUsers)
    .post(userController_1.userController.createUser);
userRouter
    .route('/:id')
    .get(userController_1.userController.getUser)
    .patch(userController_1.userController.updateUser)
    .delete(userController_1.userController.deleteUser);
exports.default = userRouter;
