"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUniq = void 0;
function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
                return arr[i];
            }
        }
        else if (i === arr.length - 1) {
            if (arr[i] !== arr[i - 1] && arr[i] !== arr[i - 2]) {
                return arr[i];
            }
        }
        else {
            if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
                return arr[i];
            }
        }
    }
    return -1;
}
exports.findUniq = findUniq;
