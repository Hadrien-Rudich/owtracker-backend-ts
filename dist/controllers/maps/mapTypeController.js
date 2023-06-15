"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTypeController = void 0;
const mapTypes_1 = require("../../data/dataMappers/maps/mapTypes");
exports.mapTypeController = {
    async getMapTypes(req, res, next) {
        try {
            const mapTypes = await mapTypes_1.mapTypeMapper.readMapTypes();
            res.status(200).json(mapTypes);
        }
        catch (error) {
            next(error);
        }
    },
};
