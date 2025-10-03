//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes

export default class Album {
    private mineStickers: number[]

    constructor(mineStickers: number[]) {
        this.mineStickers = mineStickers;
    }
    
    private quickSort(arr: number[]): number[] {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[arr.length - 1];
        const left: number[] = [];
        const right: number[] = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }

            else {
                right.push(arr[i]);
            }
        }

        return [...this.quickSort(left), pivot, ...this.quickSort(right)];
    }

    public getRepeated(): number[] {
        this.mineStickers = this.quickSort(this.mineStickers);
        
        let repeated: number[] = [];

        for(let i = 0; i < this.mineStickers.length; i++) {
            if(this.mineStickers[i] === this.mineStickers[i + 1]) {
                repeated.push(this.mineStickers[i]);
            }
        }
        return repeated;
    }

    public getWanted(someoneStickers: number[]): number[] {
        let wanted: number[] = [];
        for(let i = 0; i < someoneStickers.length; i++) {
            if(!this.mineStickers.includes(someoneStickers[i]) && !wanted.includes(someoneStickers[i])) {
                wanted.push(someoneStickers[i]);
            }
        }
        return wanted;
    }
}


let sheldon = new Album([3, 6, 9, 6, 12, 3, 6]);
console.log(sheldon.getRepeated());
console.log(sheldon.getWanted([3, 6, 4, 12, 8, 4]));