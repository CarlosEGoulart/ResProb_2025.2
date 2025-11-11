"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unique {
    constructor(m) {
        this.m = m;
    }
    findUnique() {
        let equalNumber;
        if (this.m[0] === this.m[1]) {
            equalNumber = this.m[0];
            for (let i = 0; i < this.m.length; i++) {
                if (this.m[i] != equalNumber) {
                    return this.m[i];
                }
            }
        }
        if (this.m[0] != this.m[2]) {
            return this.m[0];
        }
        return this.m[1];
    }
}
exports.default = Unique;
let test = new Unique([1, 1, 1, 1, 3]);
console.log(test.findUnique());
