"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroMapper = void 0;
const heroesData_1 = require("./heroesData");
const error_1 = require("../../../models/error");
exports.heroMapper = {
    async findAll() {
        // to be edited with await and DB call
        if (heroesData_1.heroes.length >= 1) {
            return heroesData_1.heroes;
        }
        else {
            throw new error_1.InternalServerError('No Heroes were found');
        }
    },
    async findBySlug(slug) {
        // to be edited with await and DB call
        const heroBySlug = heroesData_1.heroes.find((hero) => hero.slug === slug);
        if (heroBySlug) {
            return heroBySlug;
        }
        else {
            throw new error_1.NotFoundError(`Hero with slug: ${slug} was not found`);
        }
    },
    async FindByRole(role) {
        const heroesByRole = heroesData_1.heroes.filter((hero) => hero.role === role);
        if (heroesByRole.length >= 1) {
            return heroesByRole;
        }
        else {
            throw new error_1.NotFoundError(`No Hero with role: ${role} was found`);
        }
    },
};
