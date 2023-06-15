"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesHistoryController_1 = require("../../../controllers/users/gamesHistoryController");
const gamesHistoryRouter = (0, express_1.Router)();
gamesHistoryRouter
    .route('/')
    .get(gamesHistoryController_1.gamesHistoryController.getGamesHistory)
    .post(gamesHistoryController_1.gamesHistoryController.createGameHistory);
gamesHistoryRouter
    .route('/:id')
    .get(gamesHistoryController_1.gamesHistoryController.getGameHistory)
    .patch(gamesHistoryController_1.gamesHistoryController.updateGameHistory)
    .delete(gamesHistoryController_1.gamesHistoryController.deleteGameHistory);
exports.default = gamesHistoryRouter;
