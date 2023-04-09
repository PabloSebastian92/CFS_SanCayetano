/*Al tirar un dado tenemos 1/6 de
probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6
• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada
vez menor

• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato
ingresado por el usuario)*/

import * as rls from "readline-sync";

const numdados: number = rls.questionInt("Ingrese numero de dados a calcular:"); 
let probabilid : number = 1;

for (let contador:number = 0; contador < numdados; contador++ ){    //realizo un for para calcular la probabilidad de cualquier numero ingresado por usuarios.
      probabilid = probabilid * 1/6;
    }

    console.log("La probabilidad de sacar todos los dados con 6 es :",probabilid); // Imprimo por pantalla el resultado.

    