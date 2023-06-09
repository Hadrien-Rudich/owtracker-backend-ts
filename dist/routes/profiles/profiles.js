"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../../controllers/profiles/profileController");
const profileRouter = (0, express_1.Router)();
profileRouter.get('/', profileController_1.profileController.findAll);
profileRouter.post('/', profileController_1.profileController.addOne);
profileRouter.delete('/', profileController_1.profileController.deleteOne);
exports.default = profileRouter;
