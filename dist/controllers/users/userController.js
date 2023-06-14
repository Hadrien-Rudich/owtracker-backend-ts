"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userMapper_1 = require("../../data/dataMappers/users/userMapper");
exports.userController = {
    async getUsers(req, res, next) {
        try {
            const users = await userMapper_1.userMapper.readUsers();
            res.status(200).json(users);
        }
        catch (error) {
            next(error);
        }
    },
    async getUser(req, res, next) {
        try {
            const id = Number(req.params.id);
            const user = await userMapper_1.userMapper.readUser(id);
            res
                .status(200)
                .json([{ message: `User with id: ${id} found` }, { user: user }]);
        }
        catch (error) {
            next(error);
        }
    },
    async createUser(req, res, next) {
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
            next(error);
        }
    },
    async updateUser(req, res, next) {
        try {
            const userObj = req.body;
            await userMapper_1.userMapper.updateUser(userObj);
            res
                .status(200)
                .json([
                { message: `User with id: ${userObj.id} updated` },
                { updatedUser: userObj },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async deleteUser(req, res, next) {
        try {
            const id = Number(req.params.id);
            await userMapper_1.userMapper.deleteUser(id);
            res.status(200).json({ message: `User with id: ${id} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
