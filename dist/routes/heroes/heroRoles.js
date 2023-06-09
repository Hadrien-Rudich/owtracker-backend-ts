"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroRolesController_1 = require("../../controllers/heroes/heroRolesController");
const heroRoleRouter = (0, express_1.Router)();
heroRoleRouter.get('/', heroRolesController_1.heroRoleController.findAll);
exports.default = heroRoleRouter;
