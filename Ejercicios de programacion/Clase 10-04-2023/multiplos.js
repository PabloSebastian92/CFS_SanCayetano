"use strict";
/* Cree un metodo esMultiplo con dos parametros que devuelva el valor logico verdadero o falso segun si el primer numero que se indique
como parametro es multiplo del segundo
Recuerde que un numero es multiplo de otro si al dividirlo su resto da 0
Recuerde que la operacion mod perimite saber si el resto de una division es 0*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero1 = rls.questionInt("Ingrese un numero: ");
var numero2 = rls.questionInt("Ingrese otro numero: ");
function esMultiplo(numero1, numero2) {
    return numero1 % numero2 === 0;
}
console.log(esMultiplo(numero1, numero2));
