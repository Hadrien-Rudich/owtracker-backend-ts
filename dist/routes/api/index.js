"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const users_1 = __importDefault(require("./users/users"));
const auth_1 = __importDefault(require("./users/auth"));
const games_1 = __importDefault(require("./users/games"));
const profiles_1 = __importDefault(require("./users/profiles"));
const authenticateToken_1 = require("../../middlewares/authenticateToken");
exports.apiRouter = (0, express_1.Router)();
exports.apiRouter.use('/', auth_1.default);
exports.apiRouter.use((req, res, next) => (0, authenticateToken_1.authenticateToken)(req, res, next));
// User routes
exports.apiRouter.use('/user', users_1.default);
// Profile routes nested under user
users_1.default.use('/:userId/profiles', profiles_1.default);
// Game routes nested under profile
profiles_1.default.use('/:profileId/games', games_1.default);
// apiRouter.use('/account', userRouter);
// apiRouter.use('/maps', mapRouter);
// apiRouter.use('/heroes', heroRouter);
// apiRouter.use('/games', gamesRouter);
// apiRouter.use('/maptypes', mapTypeRouter);
// apiRouter.use('/profiles', profileRouter);
// apiRouter.use('/heroroles', heroRoleRouter);
