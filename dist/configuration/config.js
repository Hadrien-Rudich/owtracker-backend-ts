"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
require('dotenv').config();
exports.config = {
    port: process.env.PORT || '',
    connectionString: process.env.CONNECTION_STRING || '',
    accessToken: process.env.ACCESS_SECRET_TOKEN || '',
    refreshToken: process.env.REFRESH_SECRET_TOKEN || '',
    cookieToken: process.env.COOKIE_SECRET_TOKEN || '',
};
