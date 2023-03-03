import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(idx1: number, idx2: number): boolean {
    return this.data[idx1] > this.data[idx2];
  }

  swap(idx1: number, idx2: number): void {
    const temp = this.data[idx1];
    this.data[idx1] = this.data[idx2];
    this.data[idx2] = temp;
  }
}