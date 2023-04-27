"use strict";
/*Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimensionArreglo = rls.questionInt("Ingrese la longuitud de la lista:");
var numeros = new Array(dimensionArreglo);
var cantPositivos = 0, cantNegativos = 0, cantCeros = 0;
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = rls.questionInt("Ingrese un numero que quiere poner en el lugar ".concat(i + 1, ":"));
    if (numeros[i] > 0) {
        cantPositivos++;
    }
    else if (numeros[i] < 0) {
        cantNegativos++;
    }
    else {
        cantCeros++;
    }
}
console.log("".concat(cantPositivos, " positivos,").concat(cantNegativos, " negativos, ").concat(cantCeros, " cantidad de ceros"));
