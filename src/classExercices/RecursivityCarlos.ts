export default class Recursivity {
    //Exercício 1
    //MENSAGEM – Implemente um método que exiba n vezes uma mensagem na tela
    public message(n: number) {
        if (n == 0) {
            return;
        }

        this.message(n - 1);
        console.log('Mensagem');
    };

    //Exercício 2
    //CONTAGEM PROGRESSIVA – Dado um inteiro positivo n, realize a contagem progressiva de 1 até n
    public count(n: number) {
        if (n == 0) {
            return;
        }

        this.count(n - 1); //fica em um 'loop' até atender a condição base (n == 0),
        console.log(n)     //e o codigo segue para o console.log somente quando sai desse loop
    }                      //sendo [n-1, (n-1)-1... 0] e imprime como um pop de uma array

    //Exercício 3
    //CONTAGEM DE A ATÉ B – dados os inteiros a e b, realize a contagem progressiva de a até b.
    //Use a mesma classe para os exercícios 4 e 5.

    public countAToB(a: number, b: number) {
        if (b > a) {
            return;
        }

        this.countAToB(a - 1, b);
        console.log(a);
    }



}

let test = new Recursivity();
test.message(5);
test.count(5);
test.countAToB(1, 10);
