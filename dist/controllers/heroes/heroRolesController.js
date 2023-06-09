"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroRoleController = void 0;
const heroRoles_1 = require("../../data/dataMappers/heroes/heroRoles");
exports.heroRoleController = {
    findAll: async (_req, res) => {
        try {
            const allHeroRoles = await heroRoles_1.dataMapper.findAll();
            res.json(allHeroRoles);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
