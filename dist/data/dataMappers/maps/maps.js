"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMapper = void 0;
const mapsData_1 = require("./mapsData");
exports.dataMapper = {
    async findAll() {
        const allMaps = mapsData_1.maps; // DB call to be implemented
        return allMaps;
    },
    async findBySlug(slug) {
        const mapBySlug = mapsData_1.maps.find((map) => map.slug === slug);
        return mapBySlug;
    },
    async findByType(type) {
        const mapsByType = mapsData_1.maps.filter((map) => map.type === type);
        return mapsByType;
    },
};
