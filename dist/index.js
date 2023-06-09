"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const users_1 = __importDefault(require("./routes/users/users"));
const heroes_1 = __importDefault(require("./routes/heroes/heroes"));
const heroRoles_1 = __importDefault(require("./routes/heroes/heroRoles"));
const maps_1 = __importDefault(require("./routes/maps/maps"));
const mapTypes_1 = __importDefault(require("./routes/maps/mapTypes"));
const history_1 = __importDefault(require("./routes/history/history"));
const profiles_1 = __importDefault(require("./routes/profiles/profiles"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
require('dotenv').config();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use('/maps', maps_1.default);
app.use('/heroes', heroes_1.default);
app.use('/user', users_1.default);
app.use('/history', history_1.default);
app.use('/maptypes', mapTypes_1.default);
app.use('/profiles', profiles_1.default);
app.use('/heroroles', heroRoles_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
