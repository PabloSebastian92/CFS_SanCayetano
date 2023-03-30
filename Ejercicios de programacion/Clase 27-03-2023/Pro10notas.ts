//Calcular el promedio de 10 notas con while

import * as rls from "readline-sync";

let nota, suma , promedio  , cantNota , contador : number ;
contador = 1;
suma = 0;
cantNota = 10;
while (contador <=cantNota){
    nota= rls.questionInt("Ingrese una nota: ");
    suma = suma + nota;
    console.log("iteracion nro: ", contador, "Valor de la suma: ", suma);
    contador = contador + 1 ;
}


 promedio = suma / cantNota ;

 console.log("El promedio es de: ",promedio);


 
