"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CSVFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    ;
    read() {
        const raw = fs_1.default.readFileSync(this.filename, { encoding: 'utf-8' });
        this.data = raw.split('\n')
            .map((row) => row.split(','))
            .map(this.mapRow);
    }
}
exports.CSVFileReader = CSVFileReader;
