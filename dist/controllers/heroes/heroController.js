"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroController = void 0;
const heroes_1 = require("../../data/dataMappers/heroes/heroes");
exports.heroController = {
    findAll: async (_req, res) => {
        try {
            const allHeroes = await heroes_1.dataMapper.findAll();
            res.json(allHeroes);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    findOne: async (req, res) => {
        try {
            const { slug, role } = req.params;
            const singleHero = await heroes_1.dataMapper.findBySlug(slug);
            if (singleHero) {
                res.json(singleHero);
            }
            else {
                res.status(404).json({
                    error: `No Hero with type: ${role.toUpperCase()} slug: ${slug.toUpperCase()} was found`,
                });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    findByRole: async (req, res) => {
        try {
            const role = req.params.role;
            const allHeroesWithRole = await heroes_1.dataMapper.FindByRole(role);
            if (allHeroesWithRole.length > 0) {
                res.json(allHeroesWithRole);
            }
            else {
                res.status(404).json({
                    error: `No hero with role: ${role.toUpperCase()} was found`,
                });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
