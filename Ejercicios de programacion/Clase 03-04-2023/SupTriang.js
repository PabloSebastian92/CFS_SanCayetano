"use strict";
/*: Realice un programa que devuelva el area del triangulo usando los siguientes pares de base -altura
(1-2) (2-4) (3-6) (4-8) (5-10) (6-12) (7-14)
Implemente un metodo llamado calcularAreaTriangulo que reciba dos numeros por parametro (uno llamado base y otro altura).*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese valor de la base: ");
var altura = rls.questionInt("Ingrese valor de la altura: ");
function calcularAreaTriangulo() {
    return (base * altura) / 2;
}
if ((base >= 1 && base <= 7) && (altura >= 2 && altura <= 14)) {
    console.log("El area del triangulo para una base ".concat(base, " y una altura ").concat(altura, " es de ").concat(calcularAreaTriangulo()));
}
else {
    console.log("ERROR. Ingrese valores validos establecidos en la consigna del ejercicio");
}
