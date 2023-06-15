"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTypeController = void 0;
const mapTypeMapper_1 = require("../../data/dataMappers/maps/mapTypeMapper");
exports.mapTypeController = {
    async getMapTypes(req, res, next) {
        try {
            const mapTypes = await mapTypeMapper_1.mapTypeMapper.readMapTypes();
            res.status(200).json(mapTypes);
        }
        catch (error) {
            next(error);
        }
    },
};
