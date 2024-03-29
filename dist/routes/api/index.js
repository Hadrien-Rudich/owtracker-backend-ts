"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const users_1 = __importDefault(require("./users/users"));
const auth_1 = __importDefault(require("./users/auth"));
const heroes_1 = __importDefault(require("./heroes/heroes"));
const heroRoles_1 = __importDefault(require("./heroes/heroRoles"));
const maps_1 = __importDefault(require("./maps/maps"));
const mapTypes_1 = __importDefault(require("./maps/mapTypes"));
const games_1 = __importDefault(require("./users/games"));
const profiles_1 = __importDefault(require("./users/profiles"));
const authenticateToken_1 = require("../../middlewares/authenticateToken");
exports.apiRouter = (0, express_1.Router)();
exports.apiRouter.use('/', auth_1.default);
exports.apiRouter.use((req, res, next) => (0, authenticateToken_1.authenticateToken)(req, res, next));
// User routes
exports.apiRouter.use('/user', users_1.default);
users_1.default.use('/:userId/profiles', profiles_1.default);
profiles_1.default.use('/:profileId/games', games_1.default);
exports.apiRouter.use('/heroes', heroes_1.default);
exports.apiRouter.use('/heroroles', heroRoles_1.default);
exports.apiRouter.use('/maps', maps_1.default);
exports.apiRouter.use('/maptypes', mapTypes_1.default);
// Profile routes nested under user
// Game routes nested under profile
// apiRouter.use('/account', userRouter);
// apiRouter.use('/profiles', profileRouter);
