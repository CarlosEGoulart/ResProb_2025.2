"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recursivity {
    message(n) {
        if (n <= 0) {
            return;
        }
        console.log('Contagem Regressiva: ', n);
        n--;
        this.message(n);
    }
    contagem(a, b) {
        if (a > b) {
            return;
        }
        console.log(a);
        a++;
        this.contagem(a, b);
    }
    fatorial(n, aux) {
        if (n <= 1) {
            console.log(aux);
            return;
        }
        n--;
        aux = aux * n;
        this.fatorial(n, aux);
    }
    potencia(base, expoente, aux) {
        if (expoente <= 1) {
            console.log(aux);
            return;
        }
        aux = aux * base;
        expoente--;
        this.potencia(base, expoente, aux);
    }
}
exports.default = Recursivity;
let teste = new Recursivity();
// teste.message(5);
// teste.contagem(2, 7);
// teste.fatorial(5, 5);
teste.potencia(2, 4, 2);
