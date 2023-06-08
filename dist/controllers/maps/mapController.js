"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapController = void 0;
const maps_1 = require("../../data/dataMappers/maps/maps");
exports.mapController = {
    findAll: async (_req, res) => {
        try {
            const allMaps = await maps_1.dataMapper.findAll();
            res.json(allMaps);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    findOne: async (req, res) => {
        try {
            const { slug, type } = req.params;
            const mapWithSlug = await maps_1.dataMapper.findBySlug(slug);
            if (mapWithSlug) {
                res.json(mapWithSlug);
            }
            else {
                res.status(404).json({
                    error: `No Map with type: ${type.toUpperCase()} and slug: ${slug.toUpperCase()} was found`,
                });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    findByType: async (req, res) => {
        try {
            const type = req.params.type;
            const allMapsWithType = await maps_1.dataMapper.findByType(type);
            if (allMapsWithType.length > 0) {
                res.json(allMapsWithType);
            }
            else {
                res
                    .status(404)
                    .json({ error: `No Map with type: ${type.toUpperCase()} was found` });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
