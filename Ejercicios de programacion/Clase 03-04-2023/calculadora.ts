// Modularizacion (Funciones) Ejercicio calculadora con  funciones 

import * as rls from "readline-sync";

let i : number;
let linea : string;

let numero1: number = rls.questionInt("Ingrese un numero 1:");
let numero2: number = rls.questionInt("Ingrese un numero 2: ");
let opcionmenu: number = rls.questionInt("Ingrese 1 para sumar o ingrese 2 para restar, cualquier otra tecla para salir: ");

function dibujarGuiones(cantidad : number): string{
    linea = "-";
    for (i =0 ; i<=cantidad; i++){
        linea = linea + "-";
    }
   return linea;
}
// opcion 1 para ejecutar la funcion con return
let guiones40 = dibujarGuiones(40);
if (opcionmenu == 1){
    console.log(guiones40);
    console.log("El resultado de la suma es:",numero1+numero2);
    // opcion 2 para ejercutar la fucion con return
    console.log(dibujarGuiones(10));
    }
 
    if (opcionmenu == 2){
      dibujarGuiones(30);
        console.log("El resultado de la resta es:",numero1-numero2);
      dibujarGuiones(40);
        }
          
        
       
      