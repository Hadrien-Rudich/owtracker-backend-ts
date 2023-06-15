"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapController = void 0;
const mapMapper_1 = require("../../data/dataMappers/maps/mapMapper");
exports.mapController = {
    async getMaps(_req, res, next) {
        try {
            const maps = await mapMapper_1.mapMapper.readMaps();
            res.status(200).json(maps);
        }
        catch (error) {
            next(error);
        }
    },
    async getMapWithSlug(req, res, next) {
        try {
            const { slug } = req.params;
            const mapWithSlug = await mapMapper_1.mapMapper.readWithSlug(slug);
            res.status(200).json(mapWithSlug);
        }
        catch (error) {
            next(error);
        }
    },
    async getMapsWithType(req, res, next) {
        try {
            const { type } = req.params;
            const mapsWithType = await mapMapper_1.mapMapper.readWithType(type);
            if (mapsWithType) {
                res.status(200).json(mapsWithType);
            }
        }
        catch (error) {
            next(error);
        }
    },
};
