export default class LinearData {
  public expression: string;

  constructor(expression: string) {
    this.expression = expression;
  }

  public balanceamento() {
    const pilha: string[] = [];

    for (const char of this.expression) {
      if (char === '{') {
        if (
          pilha[pilha.length - 1] === '(' ||
          pilha[pilha.length - 1] === '['
        ) {
          return false;
        }
        pilha.push(char);
      } else if (char === '[') {
        if (pilha.length === 0 || pilha[pilha.length - 1] !== '{') {
          return false;
        }
        pilha.push(char);
      } else if (char === '(') {
        pilha.push(char);
      } else if (char === ')') {
        if (pilha.pop() !== '(') {
          return false;
        }
      } else if (char === ']') {
        if (pilha.pop() !== '[') {
          return false;
        }
      } else if (char === '}') {
        if (pilha.pop() !== '{') {
          return false;
        }
      }
    }
    return pilha.length === 0;
  }
}

let test = new LinearData('{a + b}');
console.log(test.balanceamento());
