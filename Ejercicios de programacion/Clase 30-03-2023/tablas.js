"use strict";
/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
// Declaro dos variables constantes que van a ser ingresadas por el usuario. Y una variable de corte para el ciclo while.
var num = rls.questionInt("Ingrese un numero positivo distinto de cero: ");
var hasta = rls.questionInt("Ingrese hasta que numero desea saber: ");
var contador = 1;
//Tome en cuenta que pasaria si ingresa un 0 , o dos 00 o un numero y un 0.Y no permitir ingresar valores menores a 0. Algo opcional no dice nada la consigna de todas formas.
if (((hasta <= 0 || num <= 0))) {
    console.log("ERROR. Ingrese valores positivos distintos de 0", "\nEl programa finalizo.");
}
else {
    while (contador <= hasta) { // Hago un ciclo con una variable contador que frene en "hasta" (el numero hasta que quiere la tabla. Puede ingresar cualquier valor NO TIENE TOPE).
        console.log("".concat(num, " x ").concat(contador, " = ").concat(num * contador));
        contador++;
    }
}
// EJERCICIO PARA ENTREGAR
// hasta ==0 && num ==0) ||
