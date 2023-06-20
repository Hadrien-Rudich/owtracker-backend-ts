"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
const gameMapper_1 = require("../../data/dataMappers/users/gameMapper");
const error_1 = require("../../models/error");
exports.gamesController = {
    async getGames(_req, res, next) {
        try {
            const games = await gameMapper_1.gameMapper.readGames();
            res.status(200).json(games);
        }
        catch (error) {
            next(error);
        }
    },
    async getGame(req, res, next) {
        try {
            const id = Number(req.params.id);
            const game = await gameMapper_1.gameMapper.readGame(id);
            res
                .status(200)
                .json([{ message: `Game with id: ${id} found` }, { game: game }]);
        }
        catch (error) {
            next(error);
        }
    },
    async createGame(req, res, next) {
        try {
            const gameObj = req.body;
            if (!gameObj.user ||
                !gameObj.profile ||
                !gameObj.result ||
                !gameObj.map ||
                !gameObj.mapType ||
                !gameObj.mapImageUrl ||
                !gameObj.heroes ||
                !gameObj.heroesImageUrl) {
                throw new error_1.BadRequestError();
            }
            else {
                const newGame = await gameMapper_1.gameMapper.createGame(gameObj);
                res
                    .status(201)
                    .json([
                    { message: `Game created with id: ${newGame.id}` },
                    { game: newGame },
                ]);
            }
        }
        catch (error) {
            next(error);
        }
    },
    async updateGame(req, res, next) {
        try {
            const gameId = Number(req.params.id);
            const gameObj = req.body;
            if (
            // !gameObj.user ||
            !gameObj.profile ||
                !gameObj.result ||
                !gameObj.map ||
                !gameObj.mapType ||
                !gameObj.mapImageUrl ||
                !gameObj.heroes ||
                !gameObj.heroesImageUrl) {
                throw new error_1.BadRequestError();
            }
            const updatedGame = await gameMapper_1.gameMapper.updateGame(gameId, gameObj);
            res
                .status(200)
                .json([
                { message: `Game with id: ${updatedGame.id} updated` },
                { updatedGame: updatedGame },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async deleteGame(req, res, next) {
        try {
            const gameId = Number(req.params.id);
            await gameMapper_1.gameMapper.deleteGame(gameId);
            res.status(200).json({ message: `Game with id: ${gameId} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
