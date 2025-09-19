export default class OrdenationList {
  public n1: number;
  public n2: number;
  public n3: number;

  constructor(n1: number, n2: number, n3: number) {
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
  }

  public ordemThree() {
    let maior = this.n1;
    let medio = this.n3;
    let menor = this.n2;

    if (this.n1 < this.n2) {
      maior = this.n2;
      menor = this.n1;
    }

    if (maior < this.n3) {
      medio = maior;
      maior = this.n3;
    }

    if (medio < menor) {
      let aux = medio;
      medio = menor;
      menor = aux;
    }

    console.log(`${menor}, ${medio}, ${maior}`);
  }

  public biggest() {
    let maior = this.n3;
    let secondMaior = this.n2;

    if (this.n1 > this.n2) {
      secondMaior = this.n1;
    }

    if (secondMaior > maior) {
      maior = secondMaior;
    }

    console.log(`Maior Valor: ${maior}`);
  }

  public selectionSort(array: number[]) {}
}

let test = new OrdenationList(5, 2, 3);
test.ordemThree();
test.biggest();
