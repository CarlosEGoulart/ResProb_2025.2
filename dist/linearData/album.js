"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Album {
    constructor(arr) {
        this.arr = arr;
    }
    getRepeated() {
        this.arr = this.quickSort(this.arr);
        let repeated = [];
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = i; j < this.arr.length; j++) {
                if (this.arr[i] === this.arr[j]) {
                    repeated.push(this.arr[i]);
                }
            }
        }
        return repeated;
    }
    quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const pivot = arr[arr.length - 1]; // escolhe o último elemento como pivô
        const left = [];
        const right = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
        return [...this.quickSort(left), pivot, ...this.quickSort(right)];
    }
}
exports.default = Album;
let sheldon = new Album([3, 6, 9, 6, 12, 3, 6]);
console.log(sheldon.getRepeated());
