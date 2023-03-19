//Escriba su nombre y que aparezca en consola
import * as rls from "readline-sync";
let nombre: string ="";

nombre = rls .question("Ingrese su nombre:");
console.log("usted ingreso:", nombre);


//Escriba un algoritmo que lea 2 numeros por teclado e imprima en consola el resultado de la suma
import *as rls from "readline-sync";
let num1: number = rls .questionInt("Ingrese el primer numero:");
let num2: number = rls .questionInt("Ingrese el segundo numero:");

console.log("El resultado de la suma es:", num1+num2);


/*Volvamos a implementar el proceso que calcula el area del rectangulo pero para cualquier base y altura 
* El usuario debe ingresar la base y la altura por teclado
* El area debe guardarse en una variable
* El resultado debe ser mostrado por pantalla
*/
import *as rls from "readline-sync";

const base: number = rls.questionInt("Ingrese el valor de la base:");
const altura: number = rls.questionInt("Ingrese el valor de la altura:");
const area: number = base*altura;

console.log("El area es: ",area);

//De esta forma no se puede ejecutar hay que eliminar los import, el programa esta escrito asi a modo de practica



 
