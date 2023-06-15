"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroMapper = void 0;
const heroesData_1 = require("./heroesData");
const error_1 = require("../../../models/error");
exports.heroMapper = {
    async readHeroes() {
        // to be edited with await and DB call
        if (heroesData_1.heroes.length >= 1) {
            return heroesData_1.heroes;
        }
        else {
            throw new error_1.InternalServerError('No Heroes found');
        }
    },
    async readWithSlug(slug) {
        // to be edited with await and DB call
        const heroWithSlug = heroesData_1.heroes.find((hero) => hero.slug === slug);
        if (heroWithSlug) {
            return heroWithSlug;
        }
        else {
            throw new error_1.NotFoundError(`Hero with slug: ${slug} not found`);
        }
    },
    async readWithRole(role) {
        // to be edited with await and DB call
        const heoesWithRole = heroesData_1.heroes.filter((hero) => hero.role === role);
        if (heoesWithRole.length >= 1) {
            return heoesWithRole;
        }
        else {
            throw new error_1.NotFoundError(`Heroes with role: ${role} not found`);
        }
    },
};
