"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroController = void 0;
const heroMapper_1 = require("../../data/dataMappers/heroes/heroMapper");
const error_1 = require("../../models/error");
exports.heroController = {
    findAll: async (_req, res) => {
        try {
            const allHeroes = await heroMapper_1.heroMapper.findAll();
            res.status(200).json(allHeroes);
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(500).json({ error: errorMessage });
        }
    },
    findBySlug: async (req, res) => {
        try {
            const { slug } = req.params;
            const heroWithSlug = await heroMapper_1.heroMapper.findBySlug(slug);
            res.status(200).json(heroWithSlug);
        }
        catch (error) {
            if (error instanceof error_1.NotFoundError) {
                res.status(404).json({ error: error.message });
            }
            else {
                const errorMessage = error.message;
                res.status(500).json({ error: errorMessage });
            }
        }
    },
    findByRole: async (req, res) => {
        try {
            const role = req.params.role;
            const heroesWithRole = await heroMapper_1.heroMapper.FindByRole(role);
            if (heroesWithRole) {
                res.status(200).json(heroesWithRole);
            }
        }
        catch (error) {
            if (error instanceof error_1.NotFoundError) {
                res.status(404).json({ error: error.message });
            }
            else {
                const errorMessage = error.message;
                res.status(500).json({ error: errorMessage });
            }
        }
    },
};
