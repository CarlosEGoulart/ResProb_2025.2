// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes

export default class TheLastOfUs {
  public curePeople: number;
  public cureTax: number;

  constructor(curePeople: number, cureTax: number) {
    this.curePeople = curePeople;
    this.cureTax = cureTax;
  }

  public getNumberOfMissions(target: number): number {
    if (this.curePeople >= target) {
      return 0;
    }

    this.curePeople += this.cureTax * this.curePeople;

    return 1 + this.getNumberOfMissions(target);
  }
}

let teste = new TheLastOfUs(10, 3);
console.log(teste.getNumberOfMissions(9));
