export function persistence(num: number): number {
// your code here
    let multTimes = 0;
    
    while(num >= 10){
    let result = 1;
    let strNum = num.toString();
    
    
    for(let i = 0; i < strNum.length; i++){
        result *= parseInt(strNum[i]);
    }
    
    num = result;
    multTimes++;
    }
    
    return multTimes; 
}