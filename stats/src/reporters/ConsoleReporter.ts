import { OutoutTarget } from "../Analytics";

export class ConsoleReporter implements OutoutTarget {
  report(report: string) : void {
    console.log(report);
  }
}