"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileMapper = void 0;
const profilesData_1 = require("./profilesData");
const error_1 = require("../../../models/error");
exports.profileMapper = {
    async readProfiles() {
        // to be edited with await and DB call
        if (profilesData_1.profiles.length >= 1) {
            return profilesData_1.profiles;
        }
        else {
            throw new error_1.InternalServerError('No Profiles found');
        }
    },
    async readProfile(id) {
        // to be edited with await and DB call
        const profile = profilesData_1.profiles.find((profile) => profile.id === id);
        if (profile) {
            return profile;
        }
        else {
            throw new error_1.NotFoundError(`Profile with id: ${id} not found`);
        }
    },
    async createProfile(profileObj) {
        if (!profileObj) {
            throw new error_1.BadRequestError('Invalid Profile Object.');
        }
        else {
            // to be edited with await and DB call
            const newProfile = { ...profileObj, id: Math.random() };
            profilesData_1.profiles.push(newProfile);
            return newProfile;
        }
    },
    async updateProfile(profileId, profileObj) {
        if (!profileId) {
            throw new error_1.BadRequestError('Invalid format: no ID provided');
        }
        const indexOfProfileToUpdate = profilesData_1.profiles.findIndex((profile) => profile.id === profileId);
        if (!profileObj) {
            throw new error_1.BadRequestError('Invalid format: Profile Label missing');
        }
        if (indexOfProfileToUpdate !== -1) {
            const updatedProfile = {
                ...profilesData_1.profiles[indexOfProfileToUpdate],
                label: profileObj.label,
            };
            profilesData_1.profiles[indexOfProfileToUpdate] = updatedProfile;
            return updatedProfile;
        }
        else {
            throw new error_1.NotFoundError(`Profile with id: ${profileId} not found`);
        }
    },
    async deleteProfile(id) {
        // to be edited with await and DB call
        const indexOfProfileToDelete = profilesData_1.profiles.findIndex((profile) => profile.id === id);
        if (indexOfProfileToDelete !== -1) {
            profilesData_1.profiles.splice(indexOfProfileToDelete, 1);
        }
        else {
            throw new error_1.NotFoundError(`Profile with id: ${id} was not found`);
        }
        return profilesData_1.profiles;
    },
};
