"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userMapper_1 = require("../../data/dataMappers/users/userMapper");
exports.userController = {
    async getUsers(req, res) {
        try {
            const users = await userMapper_1.userMapper.readUsers();
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async getUser(req, res) {
        try {
            const id = Number(req.params.id);
            const user = await userMapper_1.userMapper.readUser(id);
            if (user) {
                res.json([
                    { message: `User with id: ${id} was found` },
                    { user: user },
                ]);
            }
            else {
                res.status(404).json({ error: `No User with id: ${id} was found` });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async createUser(req, res) {
        try {
            const userObj = req.body;
            const newUser = await userMapper_1.userMapper.createUser(userObj);
            res.json([
                { message: `User created with id: ${newUser.id}` },
                { user: newUser },
            ]);
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(400).json({ error: errorMessage });
        }
    },
    async updateUser(req, res) {
        try {
            const userObj = req.body;
            await userMapper_1.userMapper.updateUser(userObj);
            res.json([
                { message: `User with id: ${userObj.id} was updated` },
                { updatedProfile: userObj },
            ]);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    async deleteUser(req, res) {
        try {
            const id = Number(req.params.id);
            await userMapper_1.userMapper.deleteUser(id);
            res.json({ message: `User with id: ${id} was deleted` });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
