"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMapper = void 0;
const historyData_1 = require("./historyData");
exports.dataMapper = {
    async findAll() {
        const allHistory = historyData_1.history; // DB call to be implemented
        return allHistory;
    },
    async findByPk(id) {
        const gameHistory = historyData_1.history.find((game) => game.id === id);
        return gameHistory;
    },
};
