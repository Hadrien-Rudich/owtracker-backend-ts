"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameController = void 0;
const gameMapper_1 = require("../../data/dataMappers/users/gameMapper");
exports.gameController = {
    async getAllGames(_req, res, next) {
        try {
            const games = await gameMapper_1.gameMapper.readAllGames();
            res.status(200).json(games);
        }
        catch (error) {
            next(error);
        }
    },
    async getGames(req, res, next) {
        try {
            const userId = Number(req.params.userId);
            const profileId = Number(req.params.profileId);
            const userGames = await gameMapper_1.gameMapper.readGames(userId, profileId);
            res.status(200).json(userGames);
        }
        catch (error) {
            next(error);
        }
    },
    async getGame(req, res, next) {
        try {
            const userId = Number(req.params.userId);
            const gameId = Number(req.params.gameId);
            const game = await gameMapper_1.gameMapper.readGame(userId, gameId);
            res
                .status(200)
                .json([{ message: `Game with id: ${gameId} found` }, { game: game }]);
        }
        catch (error) {
            next(error);
        }
    },
    async createGame(req, res, next) {
        try {
            const gameObj = req.body;
            console.log('attempting to create gameobject');
            console.log(gameObj);
            const newGame = await gameMapper_1.gameMapper.createGame(gameObj);
            console.log('new game created see below');
            console.log(newGame);
            res.status(201).json({
                message: `Game created with id: ${newGame.id}`,
                game: newGame,
            });
        }
        catch (error) {
            next(error);
        }
    },
    async createMockGames(req, res, next) {
        try {
            const baseGames = req.body;
            console.log('attempting to create base games');
            console.log(baseGames);
            const newGames = await gameMapper_1.gameMapper.createMockGames(baseGames);
            console.log('new games created, see below');
            console.log(newGames);
            res.status(201).json({
                message: `Games created with IDs: ${newGames
                    .map((game) => game.id)
                    .join(', ')}`,
                games: newGames,
            });
        }
        catch (error) {
            next(error);
        }
    },
    async updateGame(req, res, next) {
        try {
            const userId = Number(req.params.userId);
            const profileId = Number(req.params.profileId);
            const gameId = Number(req.params.gameId);
            const gameObj = req.body;
            const updatedGame = await gameMapper_1.gameMapper.updateGame(userId, profileId, gameId, gameObj);
            res.status(200).json({
                message: `Game with id: ${updatedGame.id} updated`,
                game: updatedGame,
            });
        }
        catch (error) {
            console.log('error in updateGame');
            next(error);
        }
    },
    async deleteGame(req, res, next) {
        try {
            const gameId = Number(req.params.gameId);
            await gameMapper_1.gameMapper.deleteGame(gameId);
            res.status(200).json({ message: `Game with id: ${gameId} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
