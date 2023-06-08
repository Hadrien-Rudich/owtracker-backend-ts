"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroController_1 = require("../../controllers/heroes/heroController");
const heroRouter = (0, express_1.Router)();
heroRouter.get('/', heroController_1.heroController.findAll);
heroRouter.get('/:role', heroController_1.heroController.findByRole);
heroRouter.get('/:role/:slug', heroController_1.heroController.findOne);
exports.default = heroRouter;
