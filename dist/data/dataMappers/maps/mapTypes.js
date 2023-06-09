"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMapper = void 0;
const mapTypesData_1 = require("./mapTypesData");
exports.dataMapper = {
    async findAll() {
        const allMapTypes = mapTypesData_1.mapTypes; // DB call to be implemented
        return allMapTypes;
    },
};
