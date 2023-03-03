import { CSVFileReader } from "./CSVFileReader";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type DataReader = {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static toCSV(filename: string): MatchReader {
    return new MatchReader(new CSVFileReader(filename));
  }

  public matches: MatchData[] = [];

  constructor(public reader: DataReader) {};

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ]
  }
}