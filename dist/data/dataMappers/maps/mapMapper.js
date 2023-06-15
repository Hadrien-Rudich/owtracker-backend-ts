"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMapper = void 0;
const mapsData_1 = require("./mapsData");
const error_1 = require("../../../models/error");
exports.mapMapper = {
    async readMaps() {
        // to be edited with await and DB call
        if (mapsData_1.maps.length >= 1) {
            return mapsData_1.maps;
        }
        else {
            throw new error_1.InternalServerError('No Maps found');
        }
    },
    async readWithSlug(slug) {
        // to be edited with await and DB call
        const mapWithSlug = mapsData_1.maps.find((map) => map.slug === slug);
        if (mapWithSlug) {
            return mapWithSlug;
        }
        else {
            throw new error_1.NotFoundError(`Map with slug: ${slug} not found`);
        }
    },
    async readWithType(type) {
        // to be edited with await and DB call
        const mapsWithType = mapsData_1.maps.filter((map) => map.type === type);
        if (mapsWithType.length >= 1) {
            return mapsWithType;
        }
        else {
            throw new error_1.NotFoundError(`Maps with type: ${type} not found`);
        }
    },
};
