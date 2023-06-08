"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mapController_1 = require("../../controllers/maps/mapController");
const heroRouter = (0, express_1.Router)();
heroRouter.get('/', mapController_1.mapController.findAll);
heroRouter.get('/:type', mapController_1.mapController.findByType);
heroRouter.get('/:type/:slug', mapController_1.mapController.findOne);
exports.default = heroRouter;
