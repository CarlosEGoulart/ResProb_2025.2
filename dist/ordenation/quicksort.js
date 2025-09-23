"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuickSort {
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
exports.default = QuickSort;
