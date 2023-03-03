import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  compare(idx1: number, idx2: number): boolean {
    return this.data[idx1].toLowerCase() > this.data[idx2].toLowerCase()
  }

  swap(idx1: number, idx2: number): void {
    const characters = this.data.split('');
    const temp = characters[idx1];
    characters[idx1] = characters[idx2];
    characters[idx2] = temp;
    this.data = characters.join('');
  }

  get length(): number {
    return this.data.length;
  }
 }