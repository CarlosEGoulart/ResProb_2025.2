export default class Recursivity {
  public message(n: number) {
    if (n <= 0) {
      return;
    }

    console.log('Contagem Regressiva: ', n);
    n--;
    this.message(n);
  }

  public contagem(a: number, b: number) {
    if (a > b) {
      return;
    }

    console.log(a);
    a++;
    this.contagem(a, b);
  }

  public fatorial(n: number, aux: number) {
    if (n <= 1) {
      console.log(aux);
      return;
    }

    n--;
    aux = aux * n;
    this.fatorial(n, aux);
  }

  public potencia(base: number, expoente: number, aux: number) {
    if (expoente <= 1) {
      console.log(aux);
      return;
    }

    aux = aux * base;
    expoente--;
    this.potencia(base, expoente, aux);
  }
}

let teste = new Recursivity();
// teste.message(5);

// teste.contagem(2, 7);

// teste.fatorial(5, 5);

teste.potencia(2, 4, 2);
