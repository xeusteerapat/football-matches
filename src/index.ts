import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

(async function () {
  // create an object that satisfies the 'DataReader' interface
  const csvFileReader = new CSVFileReader('football.csv');

  // Create an instance of MatchReader and pass in something satisfying
  // the DataReader interface
  const matchReader = new MatchReader(csvFileReader);
  matchReader.load();

  const matches = matchReader.matches;
  console.log(matches);

  let arsenalWins = 0;

  for (let match of matches) {
    if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) {
      arsenalWins++;
    } else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin) {
      arsenalWins++;
    }
  }

  console.log(`Arsenal wins ${arsenalWins} games`);
})();
