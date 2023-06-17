"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataValidation_1 = require("../middlewares/dataValidation");
const user_1 = require("../services/dataValidation/schemas/user");
const dataValidationController_1 = require("../controllers/dataValidationController");
const dataValidationRouter = (0, express_1.Router)();
dataValidationRouter.post('/', (0, dataValidation_1.validateData)(user_1.UserSchema.userLogin), dataValidationController_1.dataValidationController.sampleRoute);
exports.default = dataValidationRouter;
