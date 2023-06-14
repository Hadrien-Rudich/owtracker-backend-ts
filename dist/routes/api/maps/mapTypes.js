"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mapTypeController_1 = require("../../../controllers/maps/mapTypeController");
const mapTypeRouter = (0, express_1.Router)();
mapTypeRouter.get('/', mapTypeController_1.mapTypeController.findAll);
exports.default = mapTypeRouter;
