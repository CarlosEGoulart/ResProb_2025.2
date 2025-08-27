import Watch from "./Watch";

console.clear();

let w1, w2, w3, w4, w5, w6, w7: Watch;

w1 = new Watch([8, 15]);  // sem divisores comuns
console.log("Teste 1");
console.log(w1.isSecure());
console.log("> true\n");

w2 = new Watch([11, 143]);  // 143 = 11 x 13
console.log("Teste 2");
console.log(w2.isSecure());
console.log("> false\n");

w3 = new Watch([2, 3, 5, 6, 7, 8]);
console.log("Teste 3");
console.log(w3.isSecure());
console.log("> true\n");

w4 = new Watch([15, 99, 36, 27]);  // mÃºltiplos de 3
console.log("Teste 4");
console.log(w4.isSecure());
console.log("> false\n");

w5 = new Watch([10, 8, 6, 4]);  // pares
console.log("Teste 5");
console.log(w5.isSecure());
console.log("> false\n");

w6 = new Watch([197, 173, 157, 109, 101]);  // primos
console.log("Teste 6");
console.log(w6.isSecure());
console.log("> true\n");

w7 = new Watch([17, 907, 911]);  // primos
console.log("Teste 7");
console.log(w7.isSecure());
console.log("> true\n");
