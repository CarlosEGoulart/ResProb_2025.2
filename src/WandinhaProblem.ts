// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes

export default class Solo {
  private n: number;
  public primes: number[] = [2];

  constructor(n: number) {
    this.n = n;
  }

  public getSolo() {
    this.primeirosPrimos(this.n);
    let notesCicle = ['E', 'F#', 'G', 'A', 'B', 'C', 'D'];
    let notes = ['E'];
    let primeNote = 0;

    for (let i = 0; i < this.n - 1; i++) {
      primeNote = (primeNote + this.primes[i]) % notesCicle.length; //primeNote vai receber a nmta na posição do índice do numero primo (% length)
      notes.push(notesCicle[primeNote]);  //adiciona a nota na posição do índice do numero primo
    }                                     //exemplo: 3 primo = 5, 5 % 7 = 5, notesCicle[5] = C 

    return notes;
  }

  public primeirosPrimos(n: number): number[] {
    this.primes = [2];
    let a = 3;

    while (this.primes.length < n) {
      let isPrime = true;

      for (let i = 3; i <= Math.sqrt(a); i += 2) {
        if (a % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime == true) {
        this.primes.push(a);
      }

      a += 2; // Testar somente os ímpares
    }
    return this.primes;
  }
}

let test = new Solo(6);
console.log('Wandinha Test: ', test.getSolo());
