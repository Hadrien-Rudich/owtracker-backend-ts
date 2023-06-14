"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../../../controllers/users/profileController");
const profileRouter = (0, express_1.Router)();
profileRouter
    .route('/')
    .get(profileController_1.profileController.getProfiles)
    .post(profileController_1.profileController.createProfile);
profileRouter
    .route('/:id')
    .get(profileController_1.profileController.getProfile)
    .patch(profileController_1.profileController.updateProfile)
    .delete(profileController_1.profileController.deleteProfile);
exports.default = profileRouter;
