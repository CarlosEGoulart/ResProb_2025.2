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

        console.log(`${smallest}, ${medium}, ${biggest}`)
    }

    public biggest(){
        let biggest: number = this.a;

        if(this.a < this.b){
            biggest = this.b;
        }
        
        if(biggest < this.c){
            biggest = this.c;
        }
        console.log(biggest);
    }
}

let test = new Three(50, 300, 150);
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
        for(let i = 0; i < this.firstHand.length; i++){
            
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        //Bubble Sort
        for(let i = 0; i < this.firstHand.length; i++){
            if(this.firstHand[i] > this.firstHand[i + 1]){
                let aux = this.firstHand[i];
                this.firstHand[i] = this.firstHand[i + 1];
                this.firstHand[i + 1] = aux;
            }
            //console.log(this.firstHand[i]);
        }

        for(let i = 0; i < this.secondHand.length; i++){
            if(this.secondHand[i] > this.secondHand[i + 1]){
                let aux = this.secondHand[i];
                this.secondHand[i] = this.secondHand[i + 1];
                this.secondHand[i + 1] = aux;
            }
            ///console.log(this.secondHand[i])
        }

        for(let i= 0; i < this.thirdHand.length; i++){
            if(this.thirdHand[i] > this.thirdHand[i + 1]){
                let aux = this.thirdHand[i];
                this.thirdHand[i] = this.thirdHand[i + 1];
                this.thirdHand[i + 1] = aux;
            }
            //console.log(this.thirdHand[i])
        }
    }
}

let test2 = new Cards([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 1, 9, 2, 8, 3, 7, 4, 6, 5], [4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);
test2.ordenHands();

