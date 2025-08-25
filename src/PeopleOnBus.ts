export function number(busStops: [number, number][]): number {
// Your Code
    var still = 0;
    
    for(let i = 0; i < busStops.length; i++){
        let onBus = busStops[i][0];
        let offBus = busStops[i][1];
        
        still += onBus;
        still -= offBus;
    }
    
    return still;
}