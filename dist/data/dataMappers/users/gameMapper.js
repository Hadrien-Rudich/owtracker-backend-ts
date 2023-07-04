"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameMapper = void 0;
const gamesData_1 = require("./gamesData");
const functions_1 = require("../../../utils/functions");
const error_1 = require("../../../models/error");
exports.gameMapper = {
    async readAllGames() {
        // to be edited with await and DB call
        if (gamesData_1.games.length >= 1) {
            return gamesData_1.games;
        }
        else {
            throw new error_1.InternalServerError('No Games found');
        }
    },
    async readGames(userId, profileId) {
        // to be edited with await and DB call
        const userGames = gamesData_1.games.filter((game) => game.userId === userId && game.profileId === profileId);
        if (userGames.length >= 1) {
            return userGames;
        }
        else {
            throw new error_1.InternalServerError('No Games found');
        }
    },
    async readGame(userId, gameId) {
        // to be edited with await and DB call
        const game = gamesData_1.games.find((game) => game.id === gameId && game.userId === userId);
        if (game) {
            return game;
        }
        else {
            throw new error_1.NotFoundError(`Profile with id: ${gameId} not found`);
        }
    },
    async createGame(gameObj) {
        // to be edited with await and DB call
        const dateNow = (0, functions_1.getCurrentDate)();
        const newGame = {
            ...gameObj,
            id: (0, functions_1.generateIncrementalId)(gamesData_1.games),
            date: dateNow,
        };
        gamesData_1.games.push(newGame);
        console.log('new game created');
        console.log(newGame);
        return newGame;
    },
    async updateGame(gameId, gameObj) {
        // to be edited with await and DB call
        const indexOfGameToUpdate = gamesData_1.games.findIndex((game) => game.id === gameId);
        if (indexOfGameToUpdate !== -1) {
            const updatedGame = { ...gamesData_1.games[indexOfGameToUpdate], ...gameObj };
            gamesData_1.games[indexOfGameToUpdate] = updatedGame;
            return updatedGame;
        }
        else {
            throw new error_1.NotFoundError(`Game with id: ${gameId} not found`);
        }
    },
    async deleteGame(gameId) {
        // to be edited with await and DB call
        const indexOfGameToDelete = gamesData_1.games.findIndex((game) => game.id === gameId);
        if (indexOfGameToDelete !== -1) {
            // to be edited with await and DB call
            gamesData_1.games.splice(indexOfGameToDelete, 1);
        }
        else {
            throw new error_1.NotFoundError(`Game with id: ${gameId} not found`);
        }
        return gamesData_1.games;
    },
};
