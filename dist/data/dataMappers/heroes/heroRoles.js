"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMapper = void 0;
const heroRolesData_1 = require("./heroRolesData");
exports.dataMapper = {
    async findAll() {
        const allHeroRoles = heroRolesData_1.heroRoles; // DB call to be implemented
        return allHeroRoles;
    },
};
