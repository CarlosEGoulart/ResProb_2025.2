export function rps(p1: string, p2: string): string{ 
    if(p1 === p2){
    return "Draw!"};
    
    const list = ["rock", "paper", "scissors"];
    
    const indexP1 = list.indexOf(p1);
    const indexP2 = list.indexOf(p2);
    
    if(indexP1 === (indexP2 + 1) % 3){
    return "Player 1 won!"
    }
    
    return "Player 2 won!"
}