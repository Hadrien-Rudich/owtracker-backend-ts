"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameHistoryMapper = void 0;
const gamesHistoryData_1 = require("./gamesHistoryData");
const functions_1 = require("../../../utils/functions");
const error_1 = require("../../../models/error");
exports.gameHistoryMapper = {
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
        const gameHistory = gamesHistoryData_1.gamesHistory.find((gameHistory) => gameHistory.id === id);
        if (gameHistory) {
            return gameHistory;
        }
        else {
            throw new error_1.NotFoundError(`Game History with id: ${id} not found`);
        }
    },
    async createGameHistory(gameHistoryObj) {
        if (!gameHistoryObj.user ||
            !gameHistoryObj.profile ||
            !gameHistoryObj.result ||
            !gameHistoryObj.map ||
            !gameHistoryObj.mapType ||
            !gameHistoryObj.mapImageUrl ||
            !gameHistoryObj.heroes ||
            !gameHistoryObj.heroesImageUrl) {
            throw new error_1.BadRequestError('Invalid User Object.');
        }
        else {
            // to be edited with await and DB call
            const dateNow = (0, functions_1.getCurrentDate)();
            const newGameHistory = {
                ...gameHistoryObj,
                id: Math.random(),
                date: dateNow,
            };
            gamesHistoryData_1.gamesHistory.push(newGameHistory);
            return newGameHistory;
        }
    },
    async updateGameHistory(gameHistoryObj) {
        const id = gameHistoryObj.id;
        if (!id) {
            throw new error_1.BadRequestError('Invalid format: no ID provided');
        }
        const indexOfGameHistoryToUpdate = gamesHistoryData_1.gamesHistory.findIndex((gameHistory) => gameHistory.id === id);
        if (!gameHistoryObj.user ||
            !gameHistoryObj.profile ||
            !gameHistoryObj.result ||
            !gameHistoryObj.map ||
            !gameHistoryObj.mapType ||
            !gameHistoryObj.mapImageUrl ||
            !gameHistoryObj.heroes ||
            !gameHistoryObj.heroesImageUrl) {
            throw new error_1.BadRequestError('Invalid format: user, profile, result, map, mapType, mapImageUrl, heroes or heroesImageUrl battleTag missing');
        }
        if (indexOfGameHistoryToUpdate !== -1) {
            const updatedGameHistory = { ...gameHistoryObj };
            gamesHistoryData_1.gamesHistory[indexOfGameHistoryToUpdate] = updatedGameHistory;
            return updatedGameHistory;
        }
        else {
            throw new error_1.NotFoundError(`Game History with id: ${id} not found`);
        }
    },
    async deleteGameHistory(id) {
        // to be edited with await and DB call
        const indexOfGameHistoryToDelete = gamesHistoryData_1.gamesHistory.findIndex((gameHistory) => gameHistory.id === id);
        if (indexOfGameHistoryToDelete !== -1) {
            gamesHistoryData_1.gamesHistory.splice(indexOfGameHistoryToDelete, 1);
        }
        else {
            throw new error_1.NotFoundError(`Game History with id: ${id} not found`);
        }
        return gamesHistoryData_1.gamesHistory;
    },
};
