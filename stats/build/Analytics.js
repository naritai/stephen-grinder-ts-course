"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
const WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
const ConsoleReporter_1 = require("./reporters/ConsoleReporter");
class Analytics {
    static winsToConsole() {
        return new Analytics(new WinsAnalyzer_1.WinsAnalyzer('Man United'), new ConsoleReporter_1.ConsoleReporter());
    }
    constructor(analyzer, outputTraget) {
        this.analyzer = analyzer;
        this.outputTraget = outputTraget;
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTraget.report(report);
    }
}
exports.Analytics = Analytics;
