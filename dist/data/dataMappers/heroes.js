"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMapper = void 0;
const heroesData_1 = require("./heroesData");
exports.dataMapper = {
    async findAll() {
        // to be edited with await once DB hooked
        return heroesData_1.heroes;
    },
    async findBySlug(slug) {
        const hero = heroesData_1.heroes.find((hero) => hero.slug === slug);
        return hero;
    },
    async FindByRole(role) {
        const hero = heroesData_1.heroes.filter((hero) => hero.role === role);
        return hero;
    },
};
