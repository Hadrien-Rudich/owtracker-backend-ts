"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMapper = void 0;
const profilesData_1 = require("./profilesData");
exports.dataMapper = {
    async findAll() {
        const allProfiles = profilesData_1.profiles; // DB call to be implemented
        return allProfiles;
    },
    async addOne(profile) {
        const newProfile = { id: Math.random(), label: profile };
        profilesData_1.profiles.push(newProfile); // DB call to be implemented
        return newProfile;
    },
    async deleteOne(id) {
        const profileIndex = profilesData_1.profiles.findIndex((profile) => profile.id === id);
        if (profileIndex === -1) {
            throw new Error('Profile not found.');
        }
        profilesData_1.profiles.splice(profileIndex, 1); // DB call to be implemented
        return profilesData_1.profiles;
    },
};
