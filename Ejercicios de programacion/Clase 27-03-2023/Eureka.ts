/*Ejercicio Eureka 
° Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
° Tenga en cuenta que la clave es la palabra eureka
° Solo tenemos 3 intentos para acertar , si fallamos los 3 intentos el sistema mostrara un mensaje diciendonos
que hemos agotado todas las oportunidades
° Si acertamos la clave saldremos del programa*/

import * as rls from "readline-sync";

const claveGuard : string ="eureka";
let clave : string = rls.question("Ingrese clave de sistema:");
let intentos : number = 0;
 
console.log("Usted ingreso: ",clave); //Muestro por pantalla la contraseña ingresada.
intentos = intentos + 1; // ya sumo +1 a los intentos teniendo encuenta la question inicial.

while  (clave !== claveGuard && intentos < 3){                            //Evaluo la clave ingresada por el usuario y la comparo con los intentos fallidos, si es que hay//
   console.log("Contraseña incorrecta vuelva a escribir clave");
   clave = rls.question("Ingrese clave de sistema: ");
   intentos = intentos + 1 ;

}    if(clave === claveGuard){                                            //Si las claves coinciden el programa finaliza
        console.log("Contraseña correcta. Ha ingresado al sistema"); 

}        else   
            console.log("Contraseña incorrecta.","\nUsted ha agotado el numero maximo de intentos para ingresar al sistema.");  //Sino vuelva en 30' :) 
            
           
     
         
      
         
   

    
 
 
 
       
     
      
   
   
        
    