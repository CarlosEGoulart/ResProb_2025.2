"use strict";
// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class Challenge {
    primeirosPrimos(n) {
        let primes = [2];
        let a = 3;
        while (primes.length < n) {
            let isPrime = true;
            for (let i = 3; i <= Math.sqrt(a); i += 2) {
                if (a % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime == true) {
                primes.push(a);
            }
            a += 2; // Testar somente os ímpares
        }
        return primes;
    }
}
exports.default = Challenge;
let tests = new Challenge();
console.log('Primeiros Primos: ', tests.primeirosPrimos(25));
