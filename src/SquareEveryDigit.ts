export class Kata {
    static squareDigits(num: number): number {
        if(num == 0){
        return 0;
        }
    
        const numString = num.toString();
        let square = ""
        
        for(let i = 0; i < numString.length; i++){
        let digit = numString[i];
        let aux = Number(digit) ** 2
        square += aux;
        }
        
        return Number(square);
    }
}