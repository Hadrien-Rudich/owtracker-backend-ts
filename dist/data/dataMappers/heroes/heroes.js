"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMapper = void 0;
const heroesData_1 = require("./heroesData");
exports.dataMapper = {
    async findAll() {
        const allHeroes = heroesData_1.heroes; // DB call to be implemented
        return allHeroes;
    },
    async findBySlug(slug) {
        const heroBySlug = heroesData_1.heroes.find((hero) => hero.slug === slug);
        return heroBySlug;
    },
    async FindByRole(role) {
        const heroesByRole = heroesData_1.heroes.filter((hero) => hero.role === role);
        return heroesByRole;
    },
};
