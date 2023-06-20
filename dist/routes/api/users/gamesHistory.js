"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../../../controllers/users/gameController");
const gamesHistoryRouter = (0, express_1.Router)();
gamesHistoryRouter
    .route('/')
    .get(gameController_1.gameController.getGames)
    .post(gameController_1.gameController.createGame);
gamesHistoryRouter
    .route('/:id')
    .get(gameController_1.gameController.getGame)
    .patch(gameController_1.gameController.updateGame)
    .delete(gameController_1.gameController.deleteGame);
exports.default = gamesHistoryRouter;
