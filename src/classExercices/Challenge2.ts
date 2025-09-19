export default class TheLastOfUs {
    public init: number;
    public tax: number;
    
    constructor(init: number, tax: number) {
        this.init = init;
        this.tax = tax;
    }

    public getNumberOfMissions(target: number): number {
        if(this.init >= target){
            return 0;
        }

        return 1 + this.getNumberOfMissions(target / (1 + this.tax));
    }
};


let game = new TheLastOfUs(40, 2);
let missions = game.getNumberOfMissions(120);
console.log(missions);
