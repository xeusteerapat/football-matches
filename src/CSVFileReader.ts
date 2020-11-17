import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CSVFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}
  fsPromises = fs.promises;

  async read(): Promise<void> {
    this.data = (
      await this.fsPromises.readFile(this.filename, {
        encoding: 'utf-8',
      })
    )
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // type assertion
      row[6],
    ];
  }
}
