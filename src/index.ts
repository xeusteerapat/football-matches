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
})();
