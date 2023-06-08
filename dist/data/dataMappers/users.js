"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataMapper = void 0;
const usersData_1 = require("./usersData");
exports.dataMapper = {
    async findAll() {
        // to be edited with await once DB hooked
        return usersData_1.users;
    },
    async findByPk(id) {
        // to be edited with await once DB hooked
        return usersData_1.users.find((user) => user.id === Number(id));
    },
};
