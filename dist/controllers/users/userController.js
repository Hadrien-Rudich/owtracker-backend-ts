"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userMapper_1 = require("../../data/dataMappers/users/userMapper");
const passwordHash_1 = require("../../services/passwordHash");
const error_1 = require("../../models/error");
exports.userController = {
    async getUsers(_req, res, next) {
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
            const userId = Number(req.params.id);
            const user = await userMapper_1.userMapper.readUser(userId);
            res
                .status(200)
                .json([{ message: `User with id: ${userId} found` }, { user: user }]);
        }
        catch (error) {
            next(error);
        }
    },
    async createUser(req, res, next) {
        try {
            const userObj = req.body;
            if (!userObj.battleTag || !userObj.email || !userObj.password) {
                throw new error_1.BadRequestError('Invalid User Object.');
            }
            const emailInUse = await userMapper_1.userMapper.checkEmail(userObj.email);
            if (emailInUse) {
                throw new error_1.EmailInUse('Email already in use');
            }
            const hashedPassword = await (0, passwordHash_1.hashPassword)(userObj.password);
            const newUser = await userMapper_1.userMapper.createUser({
                ...userObj,
                password: hashedPassword,
            });
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
            const userId = Number(req.params.id);
            const userObj = req.body;
            if (!userObj.email || !userObj.password || !userObj.battleTag) {
                throw new error_1.BadRequestError('Invalid format: email, password or battleTag missing');
            }
            const existingUser = await userMapper_1.userMapper.readUser(userId);
            await (0, passwordHash_1.comparePasswords)(userObj.password, existingUser.password);
            if (userObj.newPassword) {
                userObj.password = await (0, passwordHash_1.hashPassword)(userObj.newPassword);
            }
            const updatedUser = await userMapper_1.userMapper.updateUser(userId, userObj);
            res
                .status(200)
                .json([
                { message: `User with id: ${userId} updated` },
                { updatedUser: updatedUser },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async deleteUser(req, res, next) {
        try {
            const userId = Number(req.params.id);
            await userMapper_1.userMapper.deleteUser(userId);
            res.status(204).json({ message: `User with id: ${userId} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
