"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(idx1, idx2) {
        return this.data[idx1].toLowerCase() > this.data[idx2].toLowerCase();
    }
    swap(idx1, idx2) {
        const characters = this.data.split('');
        const temp = characters[idx1];
        characters[idx1] = characters[idx2];
        characters[idx2] = temp;
        this.data = characters.join('');
    }
    get length() {
        return this.data.length;
    }
}
exports.CharactersCollection = CharactersCollection;
