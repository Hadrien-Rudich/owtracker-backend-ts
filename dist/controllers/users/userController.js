"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userMapper_1 = require("../../data/dataMappers/users/userMapper");
const passwordHash_1 = require("../../services/passwordHash");
const error_1 = require("../../models/error");
const passwordHash_2 = require("../../services/passwordHash");
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
    async registerUser(req, res, next) {
        try {
            const userObj = req.body;
            const emailInUse = await userMapper_1.userMapper.checkEmail(userObj.email);
            if (emailInUse) {
                throw new error_1.EmailInUseError();
            }
            const hashedPassword = await (0, passwordHash_1.hashPassword)(userObj.password);
            const newUser = await userMapper_1.userMapper.createUser({
                ...userObj,
                password: hashedPassword,
            });
            console.log(newUser);
            res.status(201).json({ message: `New User created`, user: newUser });
        }
        catch (error) {
            next(error);
        }
    },
    async updateUserDetails(req, res, next) {
        try {
            const userId = Number(req.params.id);
            const userObj = req.body;
            const updatedUser = await userMapper_1.userMapper.updateUserDetails(userId, userObj);
            res
                .status(200)
                .json([
                { message: `User Details with id: ${userId} updated` },
                { updatedUser: updatedUser },
            ]);
        }
        catch (error) {
            next(error);
        }
    },
    async updateUserPassword(req, res, next) {
        try {
            const userId = Number(req.params.id);
            const userObj = req.body;
            const user = await userMapper_1.userMapper.readUser(userId);
            if (!user) {
                throw new error_1.NotFoundError();
            }
            const passwordMatch = await (0, passwordHash_2.comparePasswords)(userObj.password, user.password);
            if (!passwordMatch) {
                throw new error_1.InvalidPasswordError();
            }
            const hashedPassword = await (0, passwordHash_1.hashPassword)(userObj.newPassword);
            userObj.newPassword = hashedPassword;
            const updatedUser = await userMapper_1.userMapper.updateUserPassword(userId, userObj);
            res
                .status(200)
                .json([
                { message: `User Password with id: ${userId} updated` },
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
            res.status(200).json({ message: `User with id: ${userId} deleted` });
        }
        catch (error) {
            next(error);
        }
    },
};
