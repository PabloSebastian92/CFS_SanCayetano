/*Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.*/

import * as rls from "readline-sync";
let dimensionArreglo: number = rls.questionInt("Ingrese la longuitud de la lista:");
let numeros : number [] = new Array(dimensionArreglo);
let cantPositivos : number = 0; 
let cantNegativos : number = 0;
let cantCeros : number = 0;


for (let i : number = 0; i<numeros.length;i++){
    numeros[i]= rls.questionInt(`Ingrese un numero que quiere poner en el lugar ${i+1}:`);
    if(numeros[i]> 0){
                cantPositivos++;
            }       
                else if (numeros[i]<0){
                        cantNegativos++;
                    }   
                        else{
                            cantCeros++;
                        }     
}    
console.log(`${cantPositivos} positivos,${cantNegativos} negativos, ${cantCeros} cantidad de ceros`);

 