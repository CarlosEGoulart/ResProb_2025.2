"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TheLastOfUs {
    constructor(init, tax) {
        this.init = init;
        this.tax = tax;
    }
    getNumberOfMissions(target) {
        if (this.init >= target) {
            return 0;
        }
        return 1 + this.getNumberOfMissions(target / (1 + this.tax));
    }
}
exports.default = TheLastOfUs;
;
let game = new TheLastOfUs(40, 2);
let missions = game.getNumberOfMissions(120);
console.log(missions);
