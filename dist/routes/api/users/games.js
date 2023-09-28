"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../../../controllers/users/gameController");
const validator_1 = require("../../../services/dataValidation/validator");
const game_1 = require("../../../services/dataValidation/schemas/game");
const gamesRouter = (0, express_1.Router)({ mergeParams: true });
gamesRouter
    .route('/')
    .get(gameController_1.gameController.getGames)
    .post((0, validator_1.validateData)(game_1.GamesSchema.create), gameController_1.gameController.createGame);
gamesRouter
    .route('/:gameId')
    .get(gameController_1.gameController.getGame)
    .patch(
// validateData(GamesSchema.update),
gameController_1.gameController.updateGame)
    .delete(gameController_1.gameController.deleteGame);
exports.default = gamesRouter;
