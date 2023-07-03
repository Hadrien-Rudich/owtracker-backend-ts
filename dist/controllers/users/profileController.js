"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const profileMapper_1 = require("../../data/dataMappers/users/profileMapper");
exports.profileController = {
    async getAllProfiles(_req, res, next) {
        try {
            const profiles = await profileMapper_1.profileMapper.readAllProfiles();
            res.status(200).json(profiles);
        }
        catch (error) {
            next(error);
        }
    },
    async getProfiles(req, res, next) {
        try {
            const userId = Number(req.params.userId);
            const userProfiles = await profileMapper_1.profileMapper.readProfiles(userId);
            res.status(200).json(userProfiles);
        }
        catch (error) {
            next(error);
        }
    },
    async getProfile(req, res, next) {
        try {
            const userId = Number(req.params.userId);
            const profileId = Number(req.params.profileId);
            const profile = await profileMapper_1.profileMapper.readProfile(userId, profileId);
            res.status(200).json({
                message: `Profile with id: ${profileId} found`,
                profile: profile,
            });
        }
        catch (error) {
            next(error);
        }
    },
    async createProfile(req, res, next) {
        try {
            const userId = Number(req.params.userId);
            const profileObj = req.body;
            const newProfile = await profileMapper_1.profileMapper.createProfile(userId, profileObj);
            res.status(201).json({
                message: `Profile created with id: ${newProfile.id}`,
                profile: newProfile,
            });
        }
        catch (error) {
            next(error);
        }
    },
    async updateProfile(req, res, next) {
        try {
            const profileId = Number(req.params.profileId);
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
            const userId = Number(req.params.userId);
            const profileId = Number(req.params.profileId);
            await profileMapper_1.profileMapper.deleteProfile(userId, profileId);
            res
                .status(200)
                .json({ message: `Profile with id: ${profileId} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
