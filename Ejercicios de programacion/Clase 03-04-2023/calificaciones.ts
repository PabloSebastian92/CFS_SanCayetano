/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/

import * as rls from "readline-sync";

let NomAlum : string = "a";    // inicializo la variable con a para poder ingresar al ciclo.
let notapract,notaproble,notateorica,notafinal: number= 0;

while (NomAlum !=""){
     NomAlum  = rls.question ("Ingrese nombre alumno: "); 
      
    if (NomAlum ==("")){
        console.log("El Programa finalizo");
    }
      if (NomAlum !=("")){      
            notapract =  rls.questionInt ("Ingrese nota practica: ");          // en el ciclo while pregunto las notas para ingresarlas, luego calculo el resultado y lo muestro.
            notaproble = rls.questionInt ("Ingrese nota de problemas: ");       // en caso de ingresar valores no deseados "mensaje de error."
            notateorica = rls.questionInt ("Ingrese nota teorica: ");  
        }   
            if ( notapract < 0 || notapract > 10 || notaproble < 0 || notaproble > 10 || notateorica < 0 || notateorica > 10) {
                     console.log("ERROR las notas deben ser de 0 a 10");   
            }   else if (NomAlum !=("")) {
                    notafinal = (notapract *0.10) + (notaproble*0.50) + (notateorica*0.40);  
                    console.log("La nota final es:",notafinal);  
                }                                
 }               
      

         
 


              