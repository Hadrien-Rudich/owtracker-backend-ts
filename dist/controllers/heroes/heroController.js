"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroController = void 0;
const heroes_1 = require("../../data/dataMappers/heroes");
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
            const slug = req.params.slug;
            const singleHero = await heroes_1.dataMapper.findBySlug(slug);
            if (singleHero) {
                res.json(singleHero);
            }
            else {
                res
                    .status(404)
                    .json({ error: `Hero with slug: ${slug.toUpperCase()} not found` });
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
                res
                    .status(404)
                    .json({ error: `Heroes with role: ${role.toUpperCase()} not found` });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
