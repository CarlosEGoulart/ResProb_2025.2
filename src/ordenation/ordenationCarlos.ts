class Three{
    public a:number;
    public b:number;
    public c:number;
    
    constructor(a: number, b: number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public ordenThree(){
        let biggest: number = this.a;
        let medium: number = this.c;
        let smallest: number = this.b;

        if(this.a < this.b){
            biggest = this.b;
            smallest = this.a;
        }
        
        if(biggest < this.c){
            medium = biggest;
            biggest = this.c;
        }
       
        if(medium < smallest){
            let aux = medium;
            medium = smallest;
            smallest = aux;
        }

        //console.log(`${smallest}, ${medium}, ${biggest}`)
    }

    public biggest(){
        let biggest: number = this.a;

        if(this.a < this.b){
            biggest = this.b;
        }
        
        if(biggest < this.c){
            biggest = this.c;
        }
        //console.log(biggest);
    }
}

let test = new Three(10, 300, 150);
test.ordenThree();
test.biggest();

class Cards{
    public firstHand: number[];
    public secondHand: number[];
    public thirdHand: number[];

    constructor(firstHand: number[], secondHand: number[], thirdHand: number[]){
        this.firstHand = firstHand;
        this.secondHand = secondHand;
        this.thirdHand = thirdHand;
    }


    public ordenHands(){

        //Selection Sort
        for (let i = 0; i < this.firstHand.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < this.firstHand.length; j++) {
                if (this.firstHand[j] < this.firstHand[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                const temp = this.firstHand[i];
                this.firstHand[i] = this.firstHand[minIndex];
                this.firstHand[minIndex] = temp;
            }
            //console.log("firstHand (Selection Sort):", i);
        }

      
        //Bubble Sort
        for (let i = 0; i < this.secondHand.length - 1; i++) {
            for (let j = 0; j < this.secondHand.length - 1 - i; j++) {
                if (this.secondHand[j] > this.secondHand[j + 1]) {
                    const temp = this.secondHand[j];
                    this.secondHand[j] = this.secondHand[j + 1];
                    this.secondHand[j + 1] = temp;
                }
            }
            //console.log("secondHand (Bubble Sort):", i);
        }
        
        //Insertion Sort
        for (let i = 1; i < this.thirdHand.length; i++) {
            let current = this.thirdHand[i];
            let j = i - 1;
            while (j >= 0 && this.thirdHand[j] > current) {
                this.thirdHand[j + 1] = this.thirdHand[j];
                j--;
            }
            this.thirdHand[j + 1] = current;
           // console.log("thirdHand (Insertion Sort):", i);
        }
    }
}

let test2 = new Cards([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 1, 9, 2, 8, 3, 7, 4, 6, 5], [4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);
test2.ordenHands();


class Growing{
    public array: number[];

    constructor(array: number[]){
        this.array = array;
    }

    public verify(): boolean{
        for(let i = 0; i < this.array.length - 1; i++){
            if(this.array[i] > this.array[i + 1]){
                return false
            }
        }
        return true;
    }


    public betterBubble(){
        let swap;
        
        for(let i = 0; i < this.array.length - 1; i++){
            swap = false;
            for(let j = 0; j < this.array.length - 1; j++){
                if(this.array[j] > this.array[j+1]){
                    let aux = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = aux;
                    swap = true;
                }
            }
            if(!swap){
                break;
            }
        }
        return this.array;
    }

    public randomise(){
        for(let i = 0; i < this.array.length - 1; i++){
            let indexChange = Math.floor(Math.random() * this.array.length)
            let aux = this.array[i];
            this.array[i] = this.array [indexChange];
            this.array[indexChange] = aux;
        }
        return this.array;
    }
}

let growtest = new Growing([12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11]);
console.log(growtest.verify());
console.log(growtest.betterBubble());
console.log(growtest.randomise())


