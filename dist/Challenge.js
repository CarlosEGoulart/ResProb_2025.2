"use strict";
// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes
exports.__esModule = true;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.prototype.primeirosPrimos = function (n) {
        var primes = [2];
        var a = 3;
        while (primes.length < n) {
            var isPrime = true;
            for (var i = 3; i <= Math.sqrt(a); i += 2) {
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
    };
    return Challenge;
}());
exports["default"] = Challenge;
var tests = new Challenge();
console.log('Primeiros Primos: ', tests.primeirosPrimos(25));
