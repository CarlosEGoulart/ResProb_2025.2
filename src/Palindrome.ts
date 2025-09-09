//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes

export default class Palindrome {
  public word: string = '';

  constructor(word: string) {
    this.word = word;
  }

  public isPalindrome(
    a: number = 0,
    b: number = this.word.length - 1
  ): boolean {
    if (this.word[a] !== this.word[b]) {
      return false;
    }

    if (a >= b) {
      return true;
    }

    return this.isPalindrome(a + 1, b - 1);
  }
}

let test = new Palindrome('subinonibus');
console.log(test.isPalindrome());
