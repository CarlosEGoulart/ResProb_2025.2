class MinhaClasse {
  private dados: number[];

  constructor(dados: number[]) {
    this.dados = dados;
  }

  mostrarDados() {
    console.log(this.dados);
  }
}

// Exemplo de uso:
const instancia = new MinhaClasse([1, 2, 3, 4, 5]);
instancia.mostrarDados(); // Saída: [1, 2, 3, 4, 5]

// Método

class ArrayMétodo {
  processarArray(dados: string[]) {
    dados.forEach((item) => {
      console.log(item);
    });
  }
}

// Exemplo de uso:
const instancia2 = new ArrayMétodo();
instancia2.processarArray(['maçã', 'banana', 'laranja']);
