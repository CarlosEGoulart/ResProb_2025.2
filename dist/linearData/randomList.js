"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomList = void 0;
class RandomList {
    constructor(arr) {
        this.arr = arr;
    }
    toString(n) {
        let string = '';
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] > n) {
                string = string + this.arr[i];
            }
        }
        return string;
    }
    removeMult(n) {
        //filter:
        //this.arr = this.arr.filter(item => item % n !== 0); //filtra a array pra passar só quem não é mult de n
        //splice
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] % n === 0) {
                this.arr.splice(i, 1); //remove 1 elemento na posição i (index, quantidade)
            }
        }
        return this.arr;
    }
}
exports.RandomList = RandomList;
let test = new RandomList([1, 2, 3, 4, 5, 6, 7, 8, 99, 10]);
console.log(test.toString(3));
console.log(test.removeMult(5));
//console.log(test.closerAverage());
