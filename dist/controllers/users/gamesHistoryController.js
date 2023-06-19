"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesHistoryController = void 0;
const gameHistoryMapper_1 = require("../../data/dataMappers/users/gameHistoryMapper");
const error_1 = require("../../models/error");
exports.gamesHistoryController = {
    async getGamesHistory(_req, res, next) {
        try {
            const gamesHistory = await gameHistoryMapper_1.gameHistoryMapper.readGamesHistory();
            res.status(200).json(gamesHistory);
        }
        catch (error) {
            next(error);
        }
    },
    async getGameHistory(req, res, next) {
        try {
            const id = Number(req.params.id);
            const gameHistory = await gameHistoryMapper_1.gameHistoryMapper.readGameHistory(id);
            res
                .status(200)
                .json([
                { message: `Game History with id: ${id} found` },
                { gameHistory: gameHistory },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async createGameHistory(req, res, next) {
        try {
            const gameHistoryObj = req.body;
            if (!gameHistoryObj.user ||
                !gameHistoryObj.profile ||
                !gameHistoryObj.result ||
                !gameHistoryObj.map ||
                !gameHistoryObj.mapType ||
                !gameHistoryObj.mapImageUrl ||
                !gameHistoryObj.heroes ||
                !gameHistoryObj.heroesImageUrl) {
                throw new error_1.BadRequestError();
            }
            else {
                const newGameHistory = await gameHistoryMapper_1.gameHistoryMapper.createGameHistory(gameHistoryObj);
                res
                    .status(201)
                    .json([
                    { message: `Game History created with id: ${newGameHistory.id}` },
                    { gameHistory: newGameHistory },
                ]);
            }
        }
        catch (error) {
            next(error);
        }
    },
    async updateGameHistory(req, res, next) {
        try {
            const gameHistoryObj = req.body;
            if (!gameHistoryObj.user ||
                !gameHistoryObj.profile ||
                !gameHistoryObj.result ||
                !gameHistoryObj.map ||
                !gameHistoryObj.mapType ||
                !gameHistoryObj.mapImageUrl ||
                !gameHistoryObj.heroes ||
                !gameHistoryObj.heroesImageUrl) {
                throw new error_1.BadRequestError();
            }
            const updatedGameHistory = await gameHistoryMapper_1.gameHistoryMapper.updateGameHistory(gameHistoryObj);
            res
                .status(200)
                .json([
                { message: `Game History with id: ${updatedGameHistory.id} updated` },
                { updatedGameHistory: updatedGameHistory },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async deleteGameHistory(req, res, next) {
        try {
            const id = Number(req.params.id);
            await gameHistoryMapper_1.gameHistoryMapper.deleteGameHistory(id);
            res.status(200).json({ message: `Game History with id: ${id} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
