import fs from 'fs';

export class CSVFileReader {
  data: string[][] = [];

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
      });
  }
}
