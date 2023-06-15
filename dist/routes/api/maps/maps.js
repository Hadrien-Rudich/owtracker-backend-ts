"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mapController_1 = require("../../../controllers/maps/mapController");
const mapRouter = (0, express_1.Router)();
mapRouter.get('/', mapController_1.mapController.getMaps);
mapRouter.get('/:type', mapController_1.mapController.getMapsWithType);
mapRouter.get('/:type/:slug', mapController_1.mapController.getMapWithSlug);
exports.default = mapRouter;
