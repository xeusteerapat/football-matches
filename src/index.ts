import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
(async function () {
  await reader.read();
  console.log(reader.data[0]);

  const matches = reader.data;

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
