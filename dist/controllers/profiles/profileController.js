"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const profiles_1 = require("../../data/dataMappers/users/profiles");
exports.profileController = {
    findAll: async (_req, res) => {
        try {
            const allProfiles = await profiles_1.dataMapper.findAll();
            res.json(allProfiles);
        }
        catch (error) {
            console.error('Error occurred while fetching profiles:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    addOne: async (req, res) => {
        try {
            const { newProfileLabel } = req.body;
            const newProfile = await profiles_1.dataMapper.addOne(newProfileLabel);
            res.json(newProfile);
        }
        catch (error) {
            console.error('Error occurred while adding a profile:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    deleteOne: async (req, res) => {
        try {
            const { id } = req.body;
            const updatedProfiles = await profiles_1.dataMapper.deleteOne(id);
            if (!updatedProfiles) {
                res.status(404).json({ error: 'Profile not found' });
            }
            else {
                res.json(updatedProfiles);
            }
        }
        catch (error) {
            console.error('Error occurred while deleting a profile:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
