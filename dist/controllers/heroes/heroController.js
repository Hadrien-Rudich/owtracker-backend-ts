"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroController = void 0;
const heroMapper_1 = require("../../data/dataMappers/heroes/heroMapper");
exports.heroController = {
    async getHeroes(req, res, next) {
        try {
            const heroes = await heroMapper_1.heroMapper.readHeroes();
            res.status(200).json(heroes);
        }
        catch (error) {
            next(error);
        }
    },
    async getHeroBySlug(req, res, next) {
        try {
            const { slug } = req.params;
            const heroWithSlug = await heroMapper_1.heroMapper.readWithSlug(slug);
            res.status(200).json(heroWithSlug);
        }
        catch (error) {
            next(error);
        }
    },
    async getHeroesByRole(req, res, next) {
        try {
            const { role } = req.params;
            const heroesWithRole = await heroMapper_1.heroMapper.readWithRole(role);
            if (heroesWithRole) {
                res.status(200).json(heroesWithRole);
            }
        }
        catch (error) {
            next(error);
        }
    },
};
