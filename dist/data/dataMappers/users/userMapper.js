"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMapper = void 0;
const usersData_1 = require("./usersData");
const error_1 = require("../../../models/error");
const functions_1 = require("../../../utils/functions");
exports.userMapper = {
    async readUsers() {
        // to be edited with await and DB call
        if (usersData_1.users.length >= 1) {
            return usersData_1.users;
        }
        else {
            throw new error_1.InternalServerError('No Users found');
        }
    },
    async readUser(userId) {
        // to be edited with await and DB call
        const user = usersData_1.users.find((user) => user.id === userId);
        if (user) {
            return user;
        }
        else {
            throw new error_1.NotFoundError(`User with id: ${userId} not found`);
        }
    },
    async checkEmail(email) {
        // to be edited with await and DB call
        const emailInUse = usersData_1.users.find((user) => user.email === email);
        return !!emailInUse;
    },
    async readUserWithEmail(email) {
        // to be edited with await and DB call
        const user = usersData_1.users.find((user) => user.email === email);
        if (user) {
            return user;
        }
        else {
            throw new error_1.NotFoundError(`User with email: ${email} not found`);
        }
    },
    async readUserWithRefreshToken(refreshToken) {
        // to be edited with await and DB call
        const user = usersData_1.users.find((user) => user.refresh_token === refreshToken);
        if (user) {
            return user;
        }
        else {
            throw new error_1.NotFoundError(`User with Refresh Token: ${refreshToken} not found`);
        }
    },
    async createUser(userObj) {
        // to be edited with await and DB call
        const newAccount = { ...userObj, id: (0, functions_1.generateIncrementalId)(usersData_1.users) };
        usersData_1.users.push(newAccount);
        return newAccount;
    },
    async updateUserDetails(userId, userObj) {
        // to be edited with await and DB call
        const indexOfAccountToUpdate = usersData_1.users.findIndex((user) => user.id === userId);
        if (indexOfAccountToUpdate !== -1) {
            const updatedUser = { ...usersData_1.users[indexOfAccountToUpdate], ...userObj };
            usersData_1.users[indexOfAccountToUpdate] = updatedUser;
            return updatedUser;
        }
        else {
            throw new error_1.NotFoundError(`User with id: ${userId} not found`);
        }
    },
    async updateRefreshToken(userId, refreshToken) {
        // to be edited with await and DB call
        const indexOfAccountToUpdate = usersData_1.users.findIndex((user) => user.id === userId);
        if (indexOfAccountToUpdate !== -1) {
            const updatedUser = {
                ...usersData_1.users[indexOfAccountToUpdate],
                refresh_token: refreshToken,
            };
            usersData_1.users[indexOfAccountToUpdate] = updatedUser;
            return updatedUser;
        }
        else {
            throw new error_1.NotFoundError(`User with id: ${userId} not found`);
        }
    },
    async updateUserPassword(userId, userObj) {
        // to be edited with await and DB call
        const indexOfAccountToUpdate = usersData_1.users.findIndex((user) => user.id === userId);
        if (indexOfAccountToUpdate !== -1) {
            const updatedUser = {
                ...usersData_1.users[indexOfAccountToUpdate],
                password: userObj.newPassword,
            };
            usersData_1.users[indexOfAccountToUpdate] = updatedUser;
            return updatedUser;
        }
        else {
            throw new error_1.NotFoundError(`User with id: ${userId} not found`);
        }
    },
    async deleteUser(userId) {
        // to be edited with await and DB call
        const indexOfAccountToDelete = usersData_1.users.findIndex((user) => user.id === userId);
        if (indexOfAccountToDelete !== -1) {
            // to be edited with await and DB call
            usersData_1.users.splice(indexOfAccountToDelete, 1);
        }
        else {
            throw new error_1.NotFoundError(`User with id: ${userId} not found`);
        }
        return usersData_1.users;
    },
};
