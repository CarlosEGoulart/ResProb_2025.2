"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recursivity {
    //Exercício 1
    //MENSAGEM – Implemente um método que exiba n vezes uma mensagem na tela
    message(n) {
        if (n == 0) {
            return;
        }
        this.message(n - 1);
        console.log('Mensagem');
    }
    ;
    //Exercício 2
    //CONTAGEM PROGRESSIVA – Dado um inteiro positivo n, realize a contagem progressiva de 1 até n
    count(n) {
        if (n == 0) {
            return;
        }
        this.count(n - 1); //fica em um 'loop' até atender a condição base (n == 0),
        console.log(n); //e o codigo segue para o console.log somente quando sai desse loop
    } //sendo [n-1, (n-1)-1... 0] e imprime como um pop de uma array
    //Exercício 3
    //CONTAGEM DE A ATÉ B – dados os inteiros a e b, realize a contagem progressiva de a até b.
    //Use a mesma classe para os exercícios 4 e 5.
    countAToB(a, b) {
        if (a > b) {
            return;
        }
        console.log(a);
        this.countAToB(a + 1, b);
    }
    //Exercício 4
    //SOMA DO INTERVALO – Dados dois números, os limites superior e inferior de um intervalo, retorne
    //a soma dos inteiros neste intervalo fechado. O limite superior sempre será maior, ou igual, ao inferior.
    sumInterval(a, b) {
        if (a == b) {
            return (a);
        }
        return (a + this.sumInterval(a + 1, b));
    }
    //Exercício 5
    //SOMA DO INTERVALO APRIMORADA – Aprimore a resolução anterior para que os limites sejam
    //invertidos no caso do limite inferior ser maior do que o inferior. Assim, quando for pedido que a função
    //retorne a soma do intervalo [10, 1], será tratado da mesma forma do que a soma de [1, 10].
    sumIntervalEnhanced(a, b) {
        if (a == b) {
            return a;
        }
        if (a > b) {
            return (b + this.sumInterval(b + 1, a));
        }
        return (a + this.sumInterval(a + 1, b));
    }
    //Exercício 6
    //FATORIAL – Dado um inteiro n, retorne n!.
    //Use a mesma classe para os exercícios 7, 8, 9 e 10.
    factorial(n) {
        if (n <= 1) {
            return 1;
        }
        return (n * this.factorial(n - 1));
    }
    //Exercício 7
    //POTÊNCIA – Dados a base e um expoente positivo, retorne base^expoente. Assuma o valor de n como base.
    power(base, expo) {
        if (expo == 0) {
            return 1;
        }
        return (base * this.power(base, expo - 1));
    }
    //Exercício 8
    //FIBONACCI – Dado um inteiro positivo n, retorne o n-ésimo termo da série de Fibonacci. Saiba que
    //os dois primeiros termos desta série são 1 e 1 e os demais são gerados a partir da soma dos
    //anteriores: 1 1 2 3 5 8 13 21...
    fibonacci(n) {
        if (n < 2) {
            return 1;
        }
        return (this.fibonacci(n - 1));
    }
    // Exercício 9
    // TRIBONACCI – Este exercício é uma mera progressão do anterior. Dado um inteiro positivo n,
    // imprima o n-ésimo termo da série de Tribonacci. Saiba que os três primeiros termos desta série são
    // 1, 1 e 2; e os demais são gerados a partir da soma dos anteriores: 1 1 2 4 7 13 24 44...
    triboacci(n) {
        if (n < 2) {
            return 1;
        }
        return (n * this.triboacci(n));
    }
}
exports.default = Recursivity;
let test = new Recursivity();
test.message(2);
test.count(2);
test.countAToB(1, 3);
console.log(test.sumInterval(1, 5));
console.log(test.sumIntervalEnhanced(5, 1));
console.log(test.factorial(8));
console.log(test.power(2, 3));
console.log(test.fibonacci(6));
