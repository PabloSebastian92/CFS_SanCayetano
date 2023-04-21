"use strict";
/* Realice un programa que devuelva la potencia de un numero,
La base y el exponente deben ser ingresador por teclado.
Solo deben admitirse exponentes mayores o iguales a 0-
Un numero elevado a 0 es 1.
Separe la logica de calcular potencias utilizando metodos. */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese una base: ");
var exponente = rls.questionInt("Ingrese un exponente: ");
function calcularPotencia(base, exponente) {
    if (exponente == 0) {
        return 1;
    }
    else {
        return Math.pow(base, exponente);
    }
}
if (exponente < 0) {
    console.log("El exponente tiene que ser mayor o igual a 0");
}
else {
    var resultado = calcularPotencia(base, exponente);
    console.log("La potencia de base ".concat(base, " y exponente ").concat(exponente, " es ").concat(resultado));
}
