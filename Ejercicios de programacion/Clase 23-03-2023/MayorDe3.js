"use strict";
//Desarrolle un algoritmo que dado tres numeros determine cual es el mayor
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var n1 = rls.questionFloat("Ingrese un Numero: ");
var n2 = rls.questionFloat("Ingrese otro Numero: ");
var n3 = rls.questionFloat("Ingrese el ultimo Numero: ");
var Mayor = 0;
if (n1 === n2 && n1 === n3) {
    console.log("Los tres numeros son iguales: ", n1);
}
if (n1 >= n2 && n1 > n3) {
    console.log("El numero mayor es: ", n1);
}
if (n2 > n1 && n2 >= n3) {
    console.log("El numero mayor es: ", n2);
}
if (n3 > n2 && n3 >= n1) {
    console.log("El Mayor es: ", n3);
}
