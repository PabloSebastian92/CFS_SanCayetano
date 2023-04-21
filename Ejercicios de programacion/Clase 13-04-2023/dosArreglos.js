"use strict";
/*Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario.
Al final debe imprimir los valores por consola.*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var names = new Array(2);
var num = new Array(3);
for (var i = 0; i < names.length; i++) {
    names[i] = rls.question("Ingrese nombres:");
}
for (var i = 0; i < num.length; i++) {
    num[i] = rls.questionInt("Ingrese num:");
}
console.log(names, num);
