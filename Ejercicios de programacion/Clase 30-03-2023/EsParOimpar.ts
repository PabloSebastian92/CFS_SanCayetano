/* Realizar un algoritmo que dado un numero entero ingresado por el usuario , visualice en pantalla si es par o impar 
En el caso de ingresar un cero , se debe volver a pedir el numero por teclado (hasta que se ingrese un numero mayor a 0)*/

import * as rls from "readline-sync";

let num : number = 0;
 
  while (num <=0){
        num = rls.questionInt("Ingrese un numero mayor a 0: ");
  }  
     if (num % 2 === 0){
        console.log("El numero es Par ");
     }  else {
        console.log ("El numero es Impar ");
     } 
            
          
   

   
   

    

