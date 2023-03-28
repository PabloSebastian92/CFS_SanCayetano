//Desarrolle un algoritmo que dado tres numeros determine cual es el mayor

import * as rls from "readline-sync";

const n1 : number = rls.questionFloat("Ingrese un Numero: ");
const n2 : number = rls.questionFloat("Ingrese otro Numero: ");
const n3 : number = rls.questionFloat("Ingrese el ultimo Numero: ");
let Mayor : number = 0;


if (n1 === n2 && n1 === n3){
        console.log("Los tres numeros son iguales: ",n1);
}       
    if (n1 >= n2 && n1 > n3){
            console.log("El numero mayor es: ",n1);
} 
        if (n2 > n1 && n2 >= n3){
            console.log("El numero mayor es: ",n2);
}  
            if (n3 > n2 && n3 >= n1){
                console.log("El Mayor es: ",n3);
}

        

        

        

    