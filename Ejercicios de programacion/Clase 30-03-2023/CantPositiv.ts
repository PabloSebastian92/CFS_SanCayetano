/*Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total */

import * as rls from "readline-sync";

let num : number = 1;
let contarpos: number =0; 
let contarneg: number = 0;
let PorcPos: number = 0;
let totalDnum : number = 1;

while (num !== 0){
    num = rls.questionFloat("Ingrese un numero: ");

    if(num > 0 ){
        contarpos = contarpos + 1;
     
    }  
        else if (num < 0 ){
            contarneg = contarneg + 1;
        }
} 

totalDnum = contarpos + contarneg;

            if (totalDnum === 0){
                console.log("El programa finalizo.")
            }
                else {
                        PorcPos = (contarpos*100)/totalDnum;
                        console.log(`${contarpos} positivos, ${PorcPos}% del total.`);
                }
