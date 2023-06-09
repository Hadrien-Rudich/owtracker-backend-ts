"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTypeController = void 0;
const mapTypes_1 = require("../../data/dataMappers/maps/mapTypes");
exports.mapTypeController = {
    findAll: async (_req, res) => {
        try {
            const allMapTypes = await mapTypes_1.dataMapper.findAll();
            res.json(allMapTypes);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
