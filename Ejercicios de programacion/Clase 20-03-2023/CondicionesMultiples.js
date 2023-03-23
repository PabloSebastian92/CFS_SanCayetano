// Condiciones multiples
var tengoMuchaPlata = true;
var esFindesemana = false;
var meSobranUnosPesos = true;
var estaLloviendo = false;
/*condiciones para salir de joda:
 1- Tiene que se fin de semana .Me tienen que sobrar unos pesos .No tiene que llover.
 2- Salvo que me sobre mucha plata y no este lloviendo tambien salgo.*/
if (esFindesemana && meSobranUnosPesos && !estaLloviendo || tengoMuchaPlata && !estaLloviendo) {
    console.log("Hoy salgo de joda");
}
