"use strict";
//Promedio de 10 notas usando for
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nota, suma, promedio, cantNotas, contador;
suma = 0;
cantNotas = 10;
for (contador = 1; contador <= 10; contador++) {
    nota = rls.questionInt(" Por favor ingrese su nota: " + contador + ":");
    suma += nota;
}
promedio = suma / cantNotas;
console.log("su promedio es: ", promedio);
