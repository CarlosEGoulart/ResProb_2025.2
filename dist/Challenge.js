"use strict";
// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class Challenge {
    primeirosPrimos(n) {
        let primes = [];
        let a = 25;
        let isPrime = true;
        //enquanto o tamanho do array for menor que n
        while (primes.length < n) {
            //verifica se o número é primo
            if (a % 2 == 0 && a !== 2) {
                isPrime = false;
            }
            for (let i = 3; i <= Math.sqrt(a); i++) {
                if (a % i === 0) {
                    isPrime = false;
                }
            }
            //adiciona o número ao array
            if (isPrime) {
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
