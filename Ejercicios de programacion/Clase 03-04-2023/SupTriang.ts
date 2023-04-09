/*: Realice un programa que devuelva el area del triangulo usando los siguientes pares de base -altura
(1-2) (2-4) (3-6) (4-8) (5-10) (6-12) (7-14)
Implemente un metodo llamado calcularAreaTriangulo que reciba dos numeros por parametro (uno llamado base y otro altura).*/

import * as rls from "readline-sync";

let base : number = rls.questionInt("Ingrese valor de la base: ");     // hago que el usuario ingrese por teclado las bases y alturas del triangulo.
let altura : number = rls.questionInt("Ingrese valor de la altura: ");


function calcularAreaTriangulo(){     //declaro la funcion sin parametros para poder despues utilizarlos en un if mas adelante.
  return (base*altura)/2;            
}
  
    if ((base >=1 && base <=7) && (altura >=2 && altura <=14)){     // Con este if acoto las posibilidades de que el usuario me ingrese valores no deseados
        console.log(`El area del triangulo para una base ${base} y una altura ${altura} es de ${calcularAreaTriangulo()}`); // Imprimo el resultado llamando a la funcion.
    }
        else{
            console.log("ERROR. Ingrese valores validos establecidos en la consigna del ejercicio");  // si los valores estan fuera del rango . Emito un mensaje de error.
        }

           /* Lo realice de esta forma para no repetir tantos console.log asi puedo calcular el area de cualquier triangulo dentro de los parametros establecidos. 
           Ejemplo: base = 1 , altura = 14. resultado 7.*/
           


