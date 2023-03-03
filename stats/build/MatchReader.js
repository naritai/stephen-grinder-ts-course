"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CSVFileReader_1 = require("./CSVFileReader");
const utils_1 = require("./utils");
class MatchReader {
    static toCSV(filename) {
        return new MatchReader(new CSVFileReader_1.CSVFileReader(filename));
    }
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    ;
    load() {
        this.reader.read();
        this.matches = this.reader.data.map(this.mapRow);
    }
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;