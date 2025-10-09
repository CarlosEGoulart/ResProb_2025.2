import Flofs from './Flofs';

let monday = new Flofs([37, 36, 36, 37, 38]);
console.log('Teste 1');
console.log(monday.getUnpaired());
console.log('> [38]\n');

let tuesday = new Flofs([36, 37, 38, 39, 37, 39, 39]);
console.log('Teste 2');
console.log(tuesday.getUnpaired());
console.log('> [36, 38, 39]\n');

let wednesday = new Flofs([36, 37, 38, 36, 37, 38]);
console.log('Teste 3');
console.log(wednesday.getUnpaired());
console.log('> []\n');

let thursday = new Flofs([45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34]);
console.log('Teste 4');
console.log(thursday.getUnpaired());
console.log('> [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]\n');

let friday = new Flofs([36]);
console.log('Teste 5');
console.log(friday.getUnpaired());
console.log('> [36]\n');
