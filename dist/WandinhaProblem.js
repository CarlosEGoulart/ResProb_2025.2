"use strict";
// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class Solo {
    constructor(n) {
        this.primes = [2];
        this.n = n;
    }
    getSolo() {
        this.primeirosPrimos(this.n);
        let notesCicle = ['E', 'F#', 'G', 'A', 'B', 'C', 'D'];
        let notes = ['E'];
        let primeNote = 0;
        for (let i = 0; i < this.n - 1; i++) {
            primeNote = (primeNote + this.primes[i]) % notesCicle.length;
            notes.push(notesCicle[primeNote]);
        }
        return notes;
    }
    primeirosPrimos(n) {
        this.primes = [2];
        let a = 3;
        while (this.primes.length < n) {
            let isPrime = true;
            for (let i = 3; i <= Math.sqrt(a); i += 2) {
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
    }
}
exports.default = Solo;
let test = new Solo(6);
console.log('Wandinha Test: ', test.getSolo());
