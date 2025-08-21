// Carlos Eduardo Goulart Oliveira e Nicolas Siqueira Moraes

export default class Avaliation {

    public NextMultiple(a: number, b: number): number {
        let res = 0;

        for (let i = 1; res <= b; i++) {
            res = a * i;
        }

        return res;
    }

    public Validate(day: number, month: number, year: number): boolean {
        const actualDay = 18;
        const actualMonth = 8;
        const actualYear = 2025;

        if (actualYear < year) {
            return false;
        }

        if (actualYear === year) {
            if (actualMonth < month) {
                return false;
            }
        }

        if (actualMonth === month) {
            if (actualDay <= day) {
                return false
            }
        }
        return true;
    }

    public PrimeNumber(a: number): boolean {
        if ((a % 2) === 0) {
            return false;
        }

        for (let i = Math.sqrt(a); i > 1; i--) {
            if ((a % i) === 0) {
                return false;
            }
        }

        return true;
    }
}

let tests = new Avaliation();
console.log("Proximo multiplo: ", tests.NextMultiple(2, 4));
console.log("O produto é valido? ", tests.Validate(19, 8, 2025));
console.log("O número é primo? ", tests.PrimeNumber(13));