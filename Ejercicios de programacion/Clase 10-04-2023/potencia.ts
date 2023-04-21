/* Realice un programa que devuelva la potencia de un numero,
La base y el exponente deben ser ingresador por teclado.
Solo deben admitirse exponentes mayores o iguales a 0-
Un numero elevado a 0 es 1.
Separe la logica de calcular potencias utilizando metodos. */

import * as rls from "readline-sync";

const base: number = rls.questionInt("Ingrese una base: ");
const exponente: number = rls.questionInt("Ingrese un exponente: ");   

function calcularPotencia(base:number,exponente:number):number{
    if(exponente == 0){
        return 1;
    }else{
        return base ** exponente; 
    }     
}

if (exponente<0){
    console.log("El exponente tiene que ser mayor o igual a 0");
}   else{
        const resultado = calcularPotencia(base,exponente);
        console.log(`La potencia de base ${base} y exponente ${exponente} es ${resultado}`);
    }









   