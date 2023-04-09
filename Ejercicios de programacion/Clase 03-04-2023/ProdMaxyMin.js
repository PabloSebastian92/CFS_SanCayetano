"use strict";
/*Diseñar un algoritmo que lea números enteros hasta teclear 0.
• Determinar y mostrar el máximo, el mínimo y la media de todos los números ingresados .
• Pensar cuidadosamente cómo debemos inicializar las variables. */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num, max, min, totalnum;
num = rls.questionInt("Ingrese numero:");
max = num;
min = num;
totalnum = num;
var cantNum = 0;
while (num !== 0) {
    num = rls.questionInt("Ingrese numero:");
    cantNum = cantNum + 1;
    totalnum = num + totalnum;
    if (num > max) {
        max = num;
    }
    if (num < min && num != 0) {
        min = num;
    }
    if (num == 0) {
        var promedio = totalnum / cantNum;
        console.log("El maximo es:", max, "El minimo es: ", min, "La media es: ", promedio);
    }
}
