export class RandomList {
  public arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public toString(n: number) {
    let string: string = '';
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] > n) {
        string = string + this.arr[i];
      }
    }
    return string;
  }

  public removeMult(n: number){
    //filter:
    //this.arr = this.arr.filter(item => item % n !== 0); //filtra a array pra passar só quem não é mult de n
    
    //splice
     for(let i = 0; i < this.arr.length; i++){
       if(this.arr[i] % n === 0){
         this.arr.splice(i, 1); //remove 1 elemento na posição i (index, quantidade)
       }
    }

    return this.arr;
  }
  
  //ERRADO
  //public closerAverage(){
  //   let sum: number = 0;
  //   for(let i = 0; i < this.arr.length; i++){
  //     sum += this.arr[i];
  //   }
  //   let average: number = (sum / this.arr.length);
  //   let closest: number = 0;
  //   let aux: number[] = []

  //   for(let i = 0; i < this.arr.length; i++){
  //     aux.push(Math.abs(this.arr[i] - average));
  //     if(aux[i] < aux[closest]){
  //       closest = this.arr[i];
  //     }

  //   }

  //   console.log('Média: ', average)
  //   return closest;
 //}

}

let test = new RandomList([1, 2, 3, 4, 5, 6, 7, 8, 99, 10]);
console.log(test.toString(3));
console.log(test.removeMult(5));
//console.log(test.closerAverage());



