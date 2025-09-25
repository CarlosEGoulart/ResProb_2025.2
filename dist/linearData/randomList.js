"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RancomList {
    constructor(arr) {
        this.arr = arr;
    }
    toString(n) {
        let string = '';
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] > n) {
                string = string + this.arr[i];
            }
            console.log(string);
        }
        return string;
    }
}
exports.default = RancomList;
let test = new RancomList([1, 3, 6, 20]);
test.toString(2);
