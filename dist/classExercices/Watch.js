"use strict";
// Nicolas Siqueira Moraes
// Carlos Eduardo Goulart Oliveira
Object.defineProperty(exports, "__esModule", { value: true });
class Watch {
    constructor(gears) {
        this.gears = gears;
    }
    isSecure() {
        let dividors = [];
        let aux = [];
        let isImpar = false;
        // Testa se forem par
        for (let k = 0; k < this.gears.length; k++) {
            if (this.gears[k] % 2 !== 0) {
                isImpar = true;
                break;
            }
        }
        if (isImpar === false) {
            return false;
        }
        //Adicionamos os primeiros divisores
        for (let j = 1; j <= this.gears[0]; j++) {
            if (this.gears[0] % j === 0) {
                dividors.push(j);
            }
        }
        // Testa os outros numeros
        for (let i = 1; i < this.gears.length; i++) {
            for (let m = 0; m <= dividors.length; m++) {
                if (this.gears[i] % dividors[m] === 0) {
                    aux.push(dividors[m]);
                }
            }
            dividors = aux;
            aux = [];
        }
        if (dividors.length >= 2) {
            return false;
        }
        return true;
    }
}
exports.default = Watch;
let teste = new Watch([30, 42, 70, 105]);
console.log(teste.isSecure());
