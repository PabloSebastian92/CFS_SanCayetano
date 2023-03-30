//Promedio de 10 notas usando for

import * as rls from "readline-sync";

let nota , suma , promedio , cantNotas , contador: number 

suma=0;
cantNotas= 10;

for (contador = 1; contador <=10; contador++){
    nota= rls.questionInt(" Por favor ingrese su nota: "+ contador + ":");
    suma+=nota ;
}
promedio = suma / cantNotas
console.log("su promedio es: ", promedio);