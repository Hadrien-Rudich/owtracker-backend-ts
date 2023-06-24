"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIncrementalId = exports.getCurrentDate = void 0;
function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear() % 100;
    const formattedDate = `${day.toString().padStart(2, '0')}/${month
        .toString()
        .padStart(2, '0')}/${year.toString().padStart(2, '0')}`;
    return formattedDate;
}
exports.getCurrentDate = getCurrentDate;
function generateIncrementalId(arr) {
    let id = arr.length;
    return id + 1;
}
exports.generateIncrementalId = generateIncrementalId;
