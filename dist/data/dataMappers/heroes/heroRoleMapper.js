"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroRoleMapper = void 0;
const heroRolesData_1 = require("./heroRolesData");
const error_1 = require("../../../models/error");
exports.heroRoleMapper = {
    async readHeroRoles() {
        // to be edited with await and DB call
        if (heroRolesData_1.heroRoles.length >= 1) {
            return heroRolesData_1.heroRoles;
        }
        else {
            throw new error_1.InternalServerError('No HeroRole found');
        }
    },
};
