/*Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que almacene 3 números ambos ingresados por el usuario. 
Al final debe imprimir los valores por consola.*/

import * as rls from "readline-sync";

let names : string []= new Array (2);
let num : number []= new Array (3);

for (let i =0 ; i<names.length;i++){
    names[i]= rls.question("Ingrese nombres:");
}
for (let i=0 ; i<num.length;i++){
    num[i]= rls.questionInt("Ingrese num:");
}

console.log(names,num);