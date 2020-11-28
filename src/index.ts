import { HtmlReport } from './reportsTargets/HtmlReport';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reportsTargets/ConsoleReport';
import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinAnalysis('Arsenal'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
