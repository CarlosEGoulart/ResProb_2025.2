//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes

export default class Flofs {
    public queue: number[] = []

    constructor(queue: number[]) {
        this.queue = queue;
    }

    public getUnpaired(): number[] {
        let unpaired: number[] = [];
        this.queue = this.quickSort(this.queue);

        for (let i = 0; i <= this.queue.length - 1; i++) {
            if (this.queue[i] != this.queue[i + 1]) {
                unpaired.push(this.queue[i]);
            }

            else if (i == this.queue.length - 1) {
                unpaired.push(this.queue[i]);
            }

            else {
                i++
            }
        }
        return unpaired;
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
}

