export default class Unique {
    public m: number[]

    constructor(m: number[]){
        this.m = m;
    }

    public findUnique(): number{
        let equalNumber: number;

        if(this.m[0] === this.m[1]){
            equalNumber = this.m[0]

            for(let i = 0; i < this.m.length; i++){ 
                if(this.m[i] != equalNumber){
                    return this.m[i]
                }
            }
        }
        
        if (this.m[0] != this.m[2]){
          return this.m[0]
        } 
          return this.m[1]
    }
}

let test = new Unique([1, 1, 1, 1, 3])
console.log(test.findUnique())