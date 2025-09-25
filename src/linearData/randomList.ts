export default class RancomList {
  public arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public toString(n: number) {
    let string: string = '';
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] > n) {
        string = string + this.arr[i];
      }
      console.log(string);
    }
    return string;
  }
}

let test = new RancomList([1, 3, 6, 20]);
test.toString(2);
