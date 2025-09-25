"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinearData {
    constructor(expression) {
        this.expression = expression;
    }
    balanceamento() {
        const pilha = [];
        for (const char of this.expression) {
            if (char === '{') {
                if (pilha[pilha.length - 1] === '(' ||
                    pilha[pilha.length - 1] === '[') {
                    return false;
                }
                pilha.push(char);
            }
            else if (char === '[') {
                if (pilha.length === 0 || pilha[pilha.length - 1] !== '{') {
                    return false;
                }
                pilha.push(char);
            }
            else if (char === '(') {
                pilha.push(char);
            }
            else if (char === ')') {
                if (pilha.pop() !== '(') {
                    return false;
                }
            }
            else if (char === ']') {
                if (pilha.pop() !== '[') {
                    return false;
                }
            }
            else if (char === '}') {
                if (pilha.pop() !== '{') {
                    return false;
                }
            }
        }
        return pilha.length === 0;
    }
}
exports.default = LinearData;
let test = new LinearData('{a + b}');
console.log(test.balanceamento());
