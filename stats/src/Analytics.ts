import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { MatchData } from "./MatchData";
import { ConsoleReporter } from "./reporters/ConsoleReporter";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutoutTarget {
  report(report: string): void;
}

export class Analytics {
  static winsToConsole(): Analytics {
    return new Analytics(
      new WinsAnalyzer('Man United'),
      new ConsoleReporter()
    )
  }

  constructor(
    public analyzer: Analyzer,
    public outputTraget: OutoutTarget
  ) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTraget.report(report);
  }
}