import { MatchReader } from './MatchReader';
import { Analytics } from './Analytics';

const matchReader = MatchReader.toCSV('football.csv');
matchReader.load();

const analitics = Analytics.winsToConsole();
analitics.buildAndPrintReport(matchReader.matches);