"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const usersData_1 = require("./usersData");
class UserMapper {
    async findAll() {
        // to be edited with await once DB hooked
        return usersData_1.users;
    }
    async findByPk(id) {
        // to be edited with await once DB hooked
        return usersData_1.users.find((user) => user.id === id);
    }
    async create(userObj) {
        const newAccount = { ...userObj, id: Math.random() };
        usersData_1.users.push(newAccount);
        return newAccount;
    }
}
exports.UserMapper = UserMapper;
