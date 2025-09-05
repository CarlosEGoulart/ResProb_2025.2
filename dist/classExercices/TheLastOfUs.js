"use strict";
// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class TheLastOfUs {
    constructor(curePeople, cureTax) {
        this.curePeople = curePeople;
        this.cureTax = cureTax;
    }
    getNumberOfMissions(target) {
        if (this.curePeople >= target) {
            return 0;
        }
        this.curePeople += this.cureTax * this.curePeople;
        return 1 + this.getNumberOfMissions(target);
    }
}
exports.default = TheLastOfUs;
let teste = new TheLastOfUs(10, 3);
console.log(teste.getNumberOfMissions(9));
