"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const profileMapper_1 = require("../../data/dataMappers/users/profileMapper");
exports.profileController = {
    async getProfiles(_req, res, next) {
        try {
            const profiles = await profileMapper_1.profileMapper.readProfiles();
            res.status(200).json(profiles);
        }
        catch (error) {
            next(error);
        }
    },
    async getProfile(req, res, next) {
        try {
            const id = Number(req.params.id);
            const profile = await profileMapper_1.profileMapper.readProfile(id);
            res
                .status(200)
                .json([
                { message: `Profile with id: ${id} found` },
                { profile: profile },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async createProfile(req, res, next) {
        try {
            const profileObj = req.body;
            const newProfile = await profileMapper_1.profileMapper.createProfile(profileObj);
            res
                .status(201)
                .json([
                { message: `Profile created with id: ${newProfile.id}` },
                { profile: newProfile },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async updateProfile(req, res, next) {
        try {
            const profileId = Number(req.params.id);
            const profileObj = req.body;
            const updatedProfile = await profileMapper_1.profileMapper.updateProfile(profileId, profileObj);
            res
                .status(200)
                .json([
                { message: `Profile updated` },
                { updatedProfile: updatedProfile },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async deleteProfile(req, res, next) {
        try {
            const profileId = Number(req.params.id);
            await profileMapper_1.profileMapper.deleteProfile(profileId);
            res
                .status(200)
                .json({ message: `Profile with id: ${profileId} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
