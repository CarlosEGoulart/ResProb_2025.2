"use strict";
// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class Challenge {
    primeirosPrimos(n) {
        let primes = [2];
        let a = 2;
        while (primes.length < n) {
            let isPrime = true;
            if (a % 2 == 0) {
                isPrime = false;
            }
            for (let i = 3; i <= Math.sqrt(a); i += 2) {
                if (a % i === 0) {
                    isPrime = false;
                }
            }
            if (isPrime == true) {
                primes.push(a);
            }
            a++;
        }
        return primes;
    }
}
exports.default = Challenge;
let tests = new Challenge();
console.log("Primeiros Primos: ", tests.primeirosPrimos(25));
