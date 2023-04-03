"use strict";
/*                    Encontrar el numero Maximo
°Leer valores hasta que se intruduzca un cero (0)
°El usuario puede introducir valores negativos y positivos
°Encontrar el maximo de los elementos que se introdujeron
°Analiza como cambia el programa para encontrar el minimo */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var maximo = 0; // Creo e inicializo  las variables para designar un maximo provisorio e inicializo num en 1 para entrar al bucle
var num = 1;
// Mientras el valor introducido sea diferente de cero, se ejecuta el bucle.
while (num !== 0) {
    num = rls.questionFloat("Ingrese un Numero: ");
    if (num !== 0 && (num > maximo || maximo === 0)) { // Pregunto al numero que ingreso el usuario si es distin de 0 y si es mayor al maximo guardado o igual ,resueldo
        maximo = num;
    }
}
console.log("El numero maximo es: ", maximo); // Si presiono 0 , salgo del programa y muestro el maximo.
/* Y para hallar el minimo debo cambiar el nombre de la variable maximo por la de minimo en donde sea que este.
 En el primer if  la condicion  num > maximo  por  la condicion  num < minimo  asi obtengo el minimo de los numeros e imprimo por pantalla el minimo.*/
// EJERCICIO PARA ENTREGAR
