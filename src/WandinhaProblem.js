"use strict";
// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes
exports.__esModule = true;
var Solo = /** @class */ (function () {
    function Solo(n) {
        this.primes = [2];
        this.n = n;
    }
    Solo.prototype.getSolo = function () {
        this.primeirosPrimos(this.n);
        var notesCicle = ['E', 'F#', 'G', 'A', 'B', 'C', 'D'];
        var notes = ['E'];
        var primeNote = 0;
        for (var i = 0; i < this.n - 1; i++) {
            primeNote = (primeNote + this.primes[i]) % notesCicle.length;
            console.log(primeNote);
            notes.push(notesCicle[primeNote]);
        }
        return notes;
    };
    Solo.prototype.primeirosPrimos = function (n) {
        this.primes = [2];
        var a = 3;
        while (this.primes.length < n) {
            var isPrime = true;
            for (var i = 3; i <= Math.sqrt(a); i += 2) {
                if (a % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime == true) {
                this.primes.push(a);
            }
            a += 2; // Testar somente os ímpares
        }
        return this.primes;
    };
    return Solo;
}());
exports["default"] = Solo;
var test = new Solo(6);
console.log('Wandinha Test: ', test.getSolo());
