"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userMapper_1 = require("../../data/dataMappers/users/userMapper");
const error_1 = require("../../models/error");
exports.userController = {
    async getUsers(_req, res) {
        try {
            const users = await userMapper_1.userMapper.readUsers();
            res.status(200).json(users);
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(500).json({ error: errorMessage });
        }
    },
    async getUser(req, res) {
        try {
            const id = Number(req.params.id);
            const user = await userMapper_1.userMapper.readUser(id);
            if (user) {
                res
                    .status(200)
                    .json([{ message: `User with id: ${id} was found` }, { user: user }]);
            }
            else {
                throw new error_1.NotFoundError(`No User with id: ${id} was found`);
            }
        }
        catch (error) {
            if (error instanceof error_1.NotFoundError) {
                res.status(404).json({ error: error.message });
            }
            else {
                const errorMessage = error.message;
                res.status(500).json({ error: errorMessage });
            }
        }
    },
    async createUser(req, res) {
        try {
            const userObj = req.body;
            const newUser = await userMapper_1.userMapper.createUser(userObj);
            res
                .status(201)
                .json([
                { message: `User created with id: ${newUser.id}` },
                { user: newUser },
            ]);
        }
        catch (error) {
            if (error instanceof error_1.BadRequestError) {
                res.status(400).json({ error: error.message });
            }
            else {
                const errorMessage = error.message;
                res.status(500).json({ error: errorMessage });
            }
        }
    },
    async updateUser(req, res) {
        try {
            const userObj = req.body;
            await userMapper_1.userMapper.updateUser(userObj);
            res
                .status(200)
                .json([
                { message: `User with id: ${userObj.id} was updated` },
                { updatedProfile: userObj },
            ]);
        }
        catch (error) {
            if (error instanceof error_1.NotFoundError) {
                res.status(404).json({ error: error.message });
            }
            else {
                const errorMessage = error.message;
                res.status(400).json({ error: errorMessage });
            }
        }
    },
    async deleteUser(req, res) {
        try {
            const id = Number(req.params.id);
            await userMapper_1.userMapper.deleteUser(id);
            res.status(200).json({ message: `User with id: ${id} was deleted` });
        }
        catch (error) {
            if (error instanceof error_1.NotFoundError) {
                res.status(404).json({ error: error.message });
            }
            else {
                const errorMessage = error.message;
                res.status(500).json({ error: errorMessage });
            }
        }
    },
};
