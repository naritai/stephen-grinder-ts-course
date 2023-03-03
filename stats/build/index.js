"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Analytics_1 = require("./Analytics");
const matchReader = MatchReader_1.MatchReader.toCSV('football.csv');
matchReader.load();
const analitics = Analytics_1.Analytics.winsToConsole();
analitics.buildAndPrintReport(matchReader.matches);
