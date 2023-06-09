"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMapper = void 0;
const usersData_1 = require("./usersData");
const error_1 = require("../../../models/error");
exports.userMapper = {
    async readUsers() {
        // to be edited with await and DB call
        if (usersData_1.users.length >= 1) {
            return usersData_1.users;
        }
        else {
            throw new error_1.InternalServerError('No Users were found');
        }
    },
    async readUser(id) {
        // to be edited with await and DB call
        const user = usersData_1.users.find((user) => user.id === id);
        if (user) {
            return user;
        }
        else {
            throw new error_1.NotFoundError(`User with id: ${id} was not found`);
        }
    },
    async createUser(userObj) {
        if (!userObj.battleTag || !userObj.email || !userObj.password) {
            throw new error_1.BadRequestError('Invalid User Object.');
        }
        else {
            // to be edited with await and DB call
            const newAccount = { ...userObj, id: Math.random() };
            usersData_1.users.push(newAccount);
            return newAccount;
        }
    },
    async updateUser(userObj) {
        const id = userObj.id;
        if (!id) {
            throw new error_1.BadRequestError('Invalid format: no ID provided');
        }
        const indexOfAccountToUpdate = usersData_1.users.findIndex((account) => account.id === id);
        if (!userObj.email || !userObj.password || !userObj.battleTag) {
            throw new error_1.BadRequestError('Invalid format: email, password or battleTag missing');
        }
        if (indexOfAccountToUpdate !== -1) {
            const updatedAccount = { ...userObj };
            usersData_1.users[indexOfAccountToUpdate] = updatedAccount;
            return updatedAccount;
        }
        else {
            throw new error_1.NotFoundError(`User with id: ${id} was not found`);
        }
    },
    async deleteUser(id) {
        // to be edited with await and DB call
        const indexOfAccountToDelete = usersData_1.users.findIndex((account) => account.id === id);
        if (indexOfAccountToDelete !== -1) {
            usersData_1.users.splice(indexOfAccountToDelete, 1);
        }
        else {
            throw new error_1.NotFoundError(`User with id: ${id} was not found`);
        }
        return usersData_1.users;
    },
};
