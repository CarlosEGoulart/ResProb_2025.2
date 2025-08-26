// Nicolas Siqueira Moraes
// Carlos Eduardo Goulart Oliveira

export default class Watch {
  public gears: number[];

  constructor(gears: number[]) {
    this.gears = gears;
  }

  public isSecure(): boolean {
    let dividors: number[] = [];
    let aux: number[] = [];
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

let teste = new Watch([30, 42, 70, 105]);
console.log(teste.isSecure());
