"use strict";
//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class Palindrome {
    constructor(word) {
        this.word = '';
        this.word = word;
    }
    isPalindrome() {
        if (this.word[0] !== this.word[this.word.length - 1]) {
            return false;
        }
        if (this.word.length <= 1) {
            return true;
        }
        return this.isPalindrome();
    }
}
exports.default = Palindrome;
let test = new Palindrome('subinonibus');
console.log(test.isPalindrome());
