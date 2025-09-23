export default class QuickSort {
  public quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr; // caso base: array de 1 ou 0 elementos já está ordenado
    }

    const pivot = arr[0]; // escolha do pivô (aqui escolhemos o primeiro elemento)
    const left = arr.filter(num => num < pivot);
    const right = arr.filter(num => num > pivot);
    const middle = arr.filter(num => num === pivot);

    // Recursivamente ordena os subarrays
    return [...this.quickSort(left), ...middle, ...this.quickSort(right)];
  }
}
