"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Palindrome = /** @class */ (function () {
    function Palindrome(word) {
        this.word = '';
        this.word = word;
    }
    Palindrome.prototype.isPalindrome = function () {
        if (this.word[0] !== this.word[this.word.length - 1]) {
            return false;
        }
        if (this.word.length <= 1) {
            return true;
        }
        this.word.slice(-1);
        this.word.slice(1);
        console.log(this.word);
        return this.isPalindrome();
    };
    return Palindrome;
}());
exports.default = Palindrome;
var test = new Palindrome('arara');
console.log(test.isPalindrome());
