"use strict";
//Calcular el promedio de 10 notas con while
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nota, suma, promedio, cantNota, contador;
contador = 1;
suma = 0;
cantNota = 10;
while (contador <= cantNota) {
    nota = rls.questionInt("Ingrese una nota: ");
    suma = suma + nota;
    console.log("iteracion nro: ", contador, "Valor de la suma: ", suma);
    contador = contador + 1;
}
promedio = suma / cantNota;
console.log("El promedio es de: ", promedio);
