"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMapper = void 0;
const usersData_1 = require("./usersData");
exports.userMapper = {
    async readUsers() {
        // to be edited with await and DB call
        if (usersData_1.users.length >= 1) {
            return usersData_1.users;
        }
        else {
            throw new Error('No users found');
        }
    },
    async readUser(id) {
        // to be edited with await and DB call
        const user = usersData_1.users.find((user) => user.id === id);
        if (user) {
            return user;
        }
        else {
            throw new Error('User was not found.');
        }
    },
    async createUser(userObj) {
        if (!userObj.battleTag || !userObj.email || !userObj.password) {
            throw new Error('Incomplete user object');
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
        // to be edited with await and DB call
        const indexOfAccountToUpdate = usersData_1.users.findIndex((account) => account.id === id);
        if (indexOfAccountToUpdate !== -1) {
            const updatedAccount = { ...userObj };
            usersData_1.users[indexOfAccountToUpdate] = updatedAccount;
            return updatedAccount;
        }
        else {
            throw new Error('User was not updated.');
        }
    },
    async deleteUser(id) {
        // to be edited with await and DB call
        const indexOfAccountToDelete = usersData_1.users.findIndex((account) => account.id === id);
        if (indexOfAccountToDelete !== -1) {
            usersData_1.users.splice(indexOfAccountToDelete, 1);
        }
        else {
            throw new Error('User was not deleted.');
        }
        return usersData_1.users;
    },
};
