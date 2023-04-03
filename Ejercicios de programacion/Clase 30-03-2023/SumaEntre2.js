"use strict";
/*Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
Si el primer numero es mayor que el segundo , debe garantizar que el algoritmo funcione correctamente de todos modos
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese un numero: ");
var num2 = rls.questionInt("Ingrese otro numero: ");
var result = 0;
if (num1 > num2) {
    num1 == num2;
    num2 == num1;
}
for (var i = num1; i <= num2; i++) {
    result = result + i;
}
console.log(result);
