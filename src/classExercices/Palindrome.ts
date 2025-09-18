//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes

export default class Palindrome {
  public word: string = '';

  constructor(word: string) {
    this.word = word;
  }

  public isPalindrome(): boolean {
    if (this.word[0] !== this.word[this.word.length - 1]) {
      return false;
    }

    if (this.word.length <= 1) {
      return true;
    }

    return this.isPalindrome();
  }
}

let test = new Palindrome('subinonibus');
console.log(test.isPalindrome());
