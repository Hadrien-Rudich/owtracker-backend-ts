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
        const newGame = {
            ...gameObj,
            id: (0, functions_1.generateIncrementalId)(gamesData_1.games),
        };
        gamesData_1.games.push(newGame);
        return newGame;
    },
    async createMockGames(gameObjects) {
        const mockGames = [];
        // to be edited with await and DB call
        for (const gameObj of gameObjects) {
            const newGame = {
                ...gameObj,
                id: (0, functions_1.generateIncrementalId)(gamesData_1.games),
            };
            gamesData_1.games.push(newGame);
            mockGames.push(newGame);
        }
        return mockGames;
    },
    async updateGame(userId, profileId, gameId, gameObj) {
        // to be edited with await and DB call
        console.log('attempting to update game');
        console.log(userId, profileId, gameId, gameObj);
        const indexOfGameToUpdate = gamesData_1.games.findIndex((game) => game.id === gameId &&
            game.userId === userId &&
            game.profileId === profileId);
        if (indexOfGameToUpdate !== -1) {
            const updatedGame = { ...gamesData_1.games[indexOfGameToUpdate], ...gameObj };
            gamesData_1.games[indexOfGameToUpdate] = updatedGame;
            console.log(updatedGame);
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
