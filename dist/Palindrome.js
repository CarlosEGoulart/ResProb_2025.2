"use strict";
//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class Palindrome {
    constructor(word) {
        this.word = '';
        this.word = word;
    }
    isPalindrome(a = 0, b = this.word.length - 1) {
        if (this.word[a] !== this.word[b]) {
            return false;
        }
        if (a >= b) {
            return true;
        }
        return this.isPalindrome(a + 1, b - 1);
    }
}
exports.default = Palindrome;
let test = new Palindrome('subinonibus');
console.log(test.isPalindrome());
