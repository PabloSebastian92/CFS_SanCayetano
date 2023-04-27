"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimensionArreglo = rls.questionInt("Ingrese la longuitud de la lista:");
var numeros = new Array(dimensionArreglo);
var cantPositivos = 0;
var cantNegativos = 0;
var cantCeros = 0;
function mostrarNum(numeros) {
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
    return ("".concat(cantPositivos, " positivos,").concat(cantNegativos, " negativos, ").concat(cantCeros, " cantidad de ceros"));
}
console.log(mostrarNum(numeros));
