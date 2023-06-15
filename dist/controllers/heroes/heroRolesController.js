"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroRoleController = void 0;
const heroRoleMapper_1 = require("../../data/dataMappers/heroes/heroRoleMapper");
exports.heroRoleController = {
    async getHeroRoles(_req, res, next) {
        try {
            const heroRoles = await heroRoleMapper_1.heroRoleMapper.readHeroRoles();
            res.status(200).json(heroRoles);
        }
        catch (error) {
            next(error);
        }
    },
};
