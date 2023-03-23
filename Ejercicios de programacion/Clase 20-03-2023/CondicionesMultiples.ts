// Condiciones multiples


let tengoMuchaPlata: boolean = true;
let esFindesemana: boolean = false;
let meSobranUnosPesos: boolean = true;
let estaLloviendo: boolean = false;

/*condiciones para salir de joda:
 1- Tiene que se fin de semana .Me tienen que sobrar unos pesos .No tiene que llover.
 2- Salvo que me sobre mucha plata y no este lloviendo tambien salgo.*/

 if ((esFindesemana && meSobranUnosPesos && !estaLloviendo) || (tengoMuchaPlata && !estaLloviendo) ) {
    console.log ("Hoy salgo de joda");
 }
else {
    console.log("Lamentablemente hoy no salgo");

}


