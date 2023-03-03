"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((val) => parseInt(val));
    const [year, month, day] = dateParts;
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
