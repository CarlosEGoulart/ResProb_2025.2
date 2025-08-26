"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static squareDigits(num) {
        if (num == 0) {
            return 0;
        }
        const numString = num.toString();
        let square = "";
        for (let i = 0; i < numString.length; i++) {
            let digit = numString[i];
            let aux = Number(digit) ** 2;
            square += aux;
        }
        return Number(square);
    }
}
exports.Kata = Kata;
