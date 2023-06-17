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
const gamesHistory_1 = __importDefault(require("./users/gamesHistory"));
const profiles_1 = __importDefault(require("./users/profiles"));
const validation_1 = __importDefault(require("../validation"));
exports.apiRouter = (0, express_1.Router)();
exports.apiRouter.use('/login', auth_1.default);
exports.apiRouter.use('/user', users_1.default);
exports.apiRouter.use('/maps', maps_1.default);
exports.apiRouter.use('/heroes', heroes_1.default);
exports.apiRouter.use('/gameshistory', gamesHistory_1.default);
exports.apiRouter.use('/maptypes', mapTypes_1.default);
exports.apiRouter.use('/profiles', profiles_1.default);
exports.apiRouter.use('/heroroles', heroRoles_1.default);
exports.apiRouter.use('/joi', validation_1.default);
