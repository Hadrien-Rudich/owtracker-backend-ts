"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesHistoryMapper = void 0;
const gamesHistoryData_1 = require("./gamesHistoryData");
const error_1 = require("../../../models/error");
exports.gamesHistoryMapper = {
    async readGamesHistory() {
        // to be edited with await and DB call
        if (gamesHistoryData_1.gamesHistory.length >= 1) {
            return gamesHistoryData_1.gamesHistory;
        }
        else {
            throw new error_1.InternalServerError('No Games History found');
        }
    },
    async readGameHistory(id) {
        // to be edited with await and DB call
        const gameHistory = history.find((game) => game.id === id);
        if (gameHistory) {
            return gameHistory;
        }
        else {
            throw new error_1.NotFoundError(`Game History with id: ${id} not found`);
        }
    },
    async createGameHistory(userObj) {
        if (!userObj.battleTag || !userObj.email || !userObj.password) {
            throw new error_1.BadRequestError('Invalid User Object.');
        }
        else {
            // to be edited with await and DB call
            const newAccount = { ...userObj, id: Math.random() };
            users.push(newAccount);
            return newAccount;
        }
    },
};
