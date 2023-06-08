"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_1 = require("../../data/dataMappers/users/users");
exports.userController = {
    findAll: async (_req, res) => {
        try {
            const users = await users_1.dataMapper.findAll();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    findOne: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await users_1.dataMapper.findByPk(id);
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).json({ error: `No User with id: ${id} was found` });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
