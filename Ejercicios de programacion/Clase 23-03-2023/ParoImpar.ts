// Identificar cuando un numero es par o impar 

import * as rls from "readline-sync";

const numero: number = rls.questionInt("Ingrese un Numero: ");

if (numero == 0){
    console.log("El numero es 0");

}   else if(numero % 2 == 0){
        console.log("El numero: ",numero ,"Es Par");

}
        else {
         console.log("El numero: ",numero,"Es impar"); 
    } 

