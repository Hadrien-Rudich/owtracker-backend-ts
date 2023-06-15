"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyController = void 0;
const history_1 = require("../../data/dataMappers/users/history");
exports.historyController = {
    findAll: async (_req, res) => {
        try {
            const allHistory = await history_1.dataMapper.findAll();
            res.json(allHistory);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    findOne: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const gameHistory = await history_1.dataMapper.findByPk(id);
            if (gameHistory) {
                res.json(gameHistory);
            }
            else {
                res.status(404).json({
                    error: `No game with id: ${id} was found`,
                });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
