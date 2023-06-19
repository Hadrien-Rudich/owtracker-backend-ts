"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const profileMapper_1 = require("../../data/dataMappers/users/profileMapper");
exports.profileController = {
    getProfiles: async (_req, res, next) => {
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
    createProfile: async (req, res, next) => {
        try {
            const { newProfileLabel } = req.body;
            const newProfile = await profileMapper_1.profileMapper.createProfile(newProfileLabel);
            res.status(201).json(newProfile);
        }
        catch (error) {
            next(error);
        }
    },
    async updateProfile(req, res, next) {
        try {
            const profileObj = req.body;
            await profileMapper_1.profileMapper.updateProfile(profileObj);
            res
                .status(200)
                .json([
                { message: `Profile with id: ${profileObj.id} updated` },
                { updatedProfile: profileObj },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    deleteProfile: async (req, res, next) => {
        try {
            const id = Number(req.params.id);
            await profileMapper_1.profileMapper.deleteProfile(id);
            res.status(200).json({ message: `Profile with id: ${id} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
