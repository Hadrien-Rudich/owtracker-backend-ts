"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mapController_1 = require("../../../controllers/maps/mapController");
const mapRouter = (0, express_1.Router)();
mapRouter.get('/', mapController_1.mapController.findAll);
mapRouter.get('/:type', mapController_1.mapController.findByType);
mapRouter.get('/:type/:slug', mapController_1.mapController.findOne);
exports.default = mapRouter;
