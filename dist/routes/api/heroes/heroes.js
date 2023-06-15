"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroController_1 = require("../../../controllers/heroes/heroController");
const heroRouter = (0, express_1.Router)();
heroRouter.get('/', heroController_1.heroController.getHeroes);
heroRouter.get('/:role', heroController_1.heroController.getHeroesWithRole);
heroRouter.get('/:role/:slug', heroController_1.heroController.getHeroWithSlug);
exports.default = heroRouter;
