"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../controllers/users/userController");
const userRouter = (0, express_1.Router)();
userRouter.get('/', userController_1.userController.findAll);
userRouter.get('/:id', userController_1.userController.findOne);
exports.default = userRouter;
