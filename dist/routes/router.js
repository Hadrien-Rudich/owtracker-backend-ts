"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("./api");
const invalidUrl_1 = __importDefault(require("../middlewares/invalidUrl"));
const router = (0, express_1.Router)();
router.use('/', api_1.apiRouter);
router.use(invalidUrl_1.default);
exports.default = router;
