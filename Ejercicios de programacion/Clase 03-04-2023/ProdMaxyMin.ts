/*Diseñar un algoritmo que lea números enteros hasta teclear 0. 
• Determinar y mostrar el máximo, el mínimo y la media de todos los números ingresados .
• Pensar cuidadosamente cómo debemos inicializar las variables. */

import * as rls from "readline-sync";


let  num, max , min ,totalnum: number;
num = rls.questionInt("Ingrese numero:");
max = num;
min = num;
totalnum = num;
let cantNum : number = 0;

while (num !==0){
    num = rls.questionInt("Ingrese numero:");
    cantNum = cantNum + 1;
    totalnum = num + totalnum;
    if (num > max){
        max = num;
        
    }  if (num < min && num !=0){
        min = num;
    } if (num ==0) {
           let promedio : number = totalnum / cantNum;

            console.log("El maximo es:",max, "El minimo es: ",min,"La media es: ",promedio);
        }
}  
   
    