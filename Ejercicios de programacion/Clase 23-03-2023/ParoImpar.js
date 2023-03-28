"use strict";
// Identificar cuando un numero es par o impar 
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese un Numero: ");
if (numero == 0) {
    console.log("El numero es 0");
}
else if (numero % 2 == 0) {
    console.log("El numero es Par");
}
else
    console.log("El numero es impar");
