"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../../../controllers/users/authController");
const authRouter = (0, express_1.Router)();
authRouter.post('/', authController_1.authController.logIn);
exports.default = authRouter;
