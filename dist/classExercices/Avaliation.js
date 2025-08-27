"use strict";
// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class Avaliation {
    NextMultiple(a, b) {
        let res = 0;
        for (let i = 1; res <= b; i++) {
            res = a * i;
        }
        return res;
    }
    Validate(day, month, year) {
        const actualDay = 18;
        const actualMonth = 8;
        const actualYear = 2025;
        if (actualYear < year) {
            return false;
        }
        if (actualYear === year) {
            if (actualMonth < month) {
                return false;
            }
        }
        if (actualMonth === month) {
            if (actualDay <= day) {
                return false;
            }
        }
        return true;
    }
    PrimeNumber(a) {
        if ((a % 2) === 0) {
            return false;
        }
        for (let i = Math.sqrt(a); i > 1; i--) {
            if ((a % i) === 0) {
                return false;
            }
        }
        return true;
    }
}
exports.default = Avaliation;
let tests = new Avaliation();
console.log("Proximo multiplo: ", tests.NextMultiple(2, 4));
console.log("O produto é valido? ", tests.Validate(19, 8, 2025));
console.log("O número é primo? ", tests.PrimeNumber(13));
