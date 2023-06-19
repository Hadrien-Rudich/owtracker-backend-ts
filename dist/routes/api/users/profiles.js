"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../../../controllers/users/profileController");
const validator_1 = require("../../../services/dataValidation/validator");
const profile_1 = require("../../../services/dataValidation/schemas/profile");
const profileRouter = (0, express_1.Router)();
profileRouter
    .route('/')
    .get(profileController_1.profileController.getProfiles)
    .post((0, validator_1.validateData)(profile_1.ProfileSchema.create), profileController_1.profileController.createProfile);
profileRouter
    .route('/:id')
    .get(profileController_1.profileController.getProfile)
    .patch((0, validator_1.validateData)(profile_1.ProfileSchema.update), profileController_1.profileController.updateProfile)
    .delete(profileController_1.profileController.deleteProfile);
exports.default = profileRouter;
