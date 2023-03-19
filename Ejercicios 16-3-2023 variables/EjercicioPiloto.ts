/*
En una prueba un piloto,tiene que completar 4 vueltas
° Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
° El programa debe retornar el tiempo total y el promedio de vuelta
*/

import *as rls from "readline-sync";

const vuelta1:number= rls .questionFloat("Ingrese tiempo de la 1ra vuelta: ");
const vuelta2:number= rls .questionFloat("Ingrese tiempo de la 2da vuelta: ");
const vuelta3:number= rls .questionFloat("Ingrese tiempo de la 3ra vuelta: ");
const vuelta4:number= rls .questionFloat("Ingrese tiempo de la 4ta vuelta: ");
const tiempototal: number= vuelta1+vuelta2+vuelta3+vuelta4;
const promediovuelta: number= tiempototal/4;

console.log ("El tiempo total es: ",tiempototal);
console.log ("El promedio por vuelta es: ",promediovuelta);


