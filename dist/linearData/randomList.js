"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomList = void 0;
class RandomList {
    constructor(arr) {
        this.arr = arr;
    }
    toString(n) {
        let string = '';
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] > n) {
                string = string + this.arr[i];
            }
        }
        return string;
    }
    removeMult(n) {
        //filter:
        //this.arr = this.arr.filter(item => item % n !== 0); //filtra a array pra passar só quem não é mult de n
        //splice
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] % n === 0) {
                this.arr.splice(i, 1); //remove 1 elemento na posição i (index, quantidade)
            }
        }
        return this.arr;
    }
    average() {
        let sum = 0;
        let minor;
        for (let i = 0; i < this.arr.length; i++) {
            sum = sum + this.arr[i];
        }
        sum = sum / (this.arr.length - 1);
        console.log('Média: ', sum);
        minor = this.arr[0];
        for (let j = 1; j < this.arr.length; j++) {
            if (Math.abs(this.arr[j] - sum) < Math.abs(minor - sum)) {
                minor = this.arr[j];
            }
        }
        return minor;
    }
    reduce(n) {
        let newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i]);
        }
        return newArr;
    }
    slice(start, end) {
        let slicedArray = [];
        for (let i = start; i < end; i++) {
            slicedArray.push(this.arr[i]);
        }
        return slicedArray;
    }
    amplitude() {
        let bigger = this.arr[0];
        let minor = bigger;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] > bigger) {
                bigger = this.arr[i];
            }
            if (this.arr[i] < minor) {
                minor = this.arr[i];
            }
        }
        let amp = bigger - minor;
        return amp;
    }
    reverse() {
        let reverseArr = [];
        for (let i = this.arr.length - 1; i >= 0; i--) {
            reverseArr.push(this.arr[i]);
        }
        return reverseArr;
    }
}
exports.RandomList = RandomList;
let test = new RandomList([1, 2, 3, 4, 5, 6, 78, 8, 7, 7, 7, 10]);
// console.log(test.toString(3));
// console.log(test.removeMult(5));
//console.log(test.closerAverage());
//console.log(test.average())
//console.log(test.reduce(5))
//console.log(test.reverse())
console.log(test.slice(2, 5));
console.log(test.amplitude());
// Criamos um array de números
const numeros = [10, 5, 8, 3, 12, 7];
// --------------------------
// slice()
// --------------------------
// O método slice NÃO altera o array original.
// Ele retorna uma cópia de uma parte do array, de acordo com o índice inicial e final (final é exclusivo).
// Pegando os elementos do índice 1 até o índice 4 (sem incluir o índice 4)
const parteDoArray = numeros.slice(1, 4);
console.log('Array original:', numeros); // [10, 5, 8, 3, 12, 7]
console.log('Resultado do slice:', parteDoArray); // [5, 8, 3]
// --------------------------
// sort()
// --------------------------
// O método sort() ordena os elementos do array *original*.
// Por padrão, ele converte tudo em string e ordena em ordem lexicográfica (ex: "10" vem antes de "2").
// Para números, devemos passar uma função de comparação.
const numerosOrdenados = [...numeros].sort((a, b) => a - b); // cópia com spread e ordenação numérica crescente
console.log('Array original ainda o mesmo:', numeros); // [10, 5, 8, 3, 12, 7]
console.log('Array ordenado:', numerosOrdenados); // [3, 5, 7, 8, 10, 12]
