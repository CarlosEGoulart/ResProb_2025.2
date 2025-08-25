function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;  // soma 1 e termina
            return digits;
        }
        digits[i] = 0; // se for 9, vira 0 e continua o loop
    }

    // se chegou aqui, é porque todos eram 9 (ex: [9,9] → [0,0])
    digits.unshift(1);
    return digits;
};
