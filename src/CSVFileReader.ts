import fs from 'fs';

export abstract class CSVFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

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
}
