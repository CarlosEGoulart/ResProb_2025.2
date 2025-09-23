export default class BinaryInsertionSort {
  public binaryInsertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let low = 0;
      let high = i;

      // Busca binária para encontrar o índice de inserção
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (key < arr[mid]) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }

      // Move os elementos à direita do ponto de inserção
      for (let j = i; j > low; j--) {
        arr[j] = arr[j - 1];
      }

      // Insere o elemento na posição encontrada
      arr[low] = key;
    }

    return arr;
  }
}
