"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTypeMapper = void 0;
const mapTypesData_1 = require("./mapTypesData");
const error_1 = require("../../../models/error");
exports.mapTypeMapper = {
    async readMapTypes() {
        // to be edited with await and DB call
        if (mapTypesData_1.mapTypes.length >= 1) {
            return mapTypesData_1.mapTypes;
        }
        else {
            throw new error_1.InternalServerError('No MapType found');
        }
    },
};
