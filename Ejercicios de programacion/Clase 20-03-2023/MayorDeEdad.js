"use strict";
// Ejercicios de operadores logicos (IF, ELSE)
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var edadUsuario = rls.questionInt("Por favor indique la edad del usuario: ");
// condicional sin accion 2 (solo uso de IF)
if (edadUsuario >= 18) {
    console.log("el usuario es mayor de edad");
}
// condicional con accion 2 (uso de IF + ELSE)
if (edadUsuario >= 18) {
    console.log("el usuario es mayor de edad");
}
else {
    console.log("el usuario es menor de edad");
}
console.log("ultima linea del programa");
