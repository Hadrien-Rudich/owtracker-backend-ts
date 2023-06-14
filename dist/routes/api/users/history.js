"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historyController_1 = require("../../../controllers/history/historyController");
const historyRouter = (0, express_1.Router)();
historyRouter.get('/', historyController_1.historyController.findAll);
historyRouter.get('/:id', historyController_1.historyController.findOne);
exports.default = historyRouter;
