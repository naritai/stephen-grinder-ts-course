import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const nums = new NumbersCollection([10, 2, -5, 0, 9]);
const string = new CharactersCollection('SomeStringHere!');


nums.sort();
console.log('nums', nums.data);
string.sort();
console.log('string', string.data);

