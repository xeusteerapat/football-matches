import fs from 'fs';

(async function () {
  const fsPromises = fs.promises;
  try {
    const matches = await (
      await fsPromises.readFile('football.csv', {
        encoding: 'utf-8',
      })
    )
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });

    enum MatchResult {
      HomeWin = 'H',
      AwayWin = 'A',
      Draw = 'D',
    }

    let arsenalWins = 0;

    for (let match of matches) {
      if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) {
        arsenalWins++;
      } else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin) {
        arsenalWins++;
      }
    }

    console.log(`Arsenal wins ${arsenalWins} games`);
  } catch (error) {
    console.log(error);
  }
})();
