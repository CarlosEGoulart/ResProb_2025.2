export default class MergeSort {
  public mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr; // caso base: array de 1 ou 0 elementos já está ordenado
    }

    // Divide o array no meio
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Ordena recursivamente cada metade e depois mescla
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  public merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    // Compara elementos das duas metades
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    // Adiciona os elementos restantes (se houver)
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}
