import fs from 'fs';

export class CSVFileReader {
  data: string[][] = [];

  constructor(public filename: string) {};

  read(): void {
    const raw = fs.readFileSync(this.filename, { encoding: 'utf-8' });
    this.data = raw.split('\n').map((row: string): string[] => row.split(','))
  }
}