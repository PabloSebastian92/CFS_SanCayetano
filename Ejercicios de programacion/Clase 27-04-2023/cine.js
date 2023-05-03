/*Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
• La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada*/
var butacas = new Array(true, false, false, true, true, false, false, true);
function recorrerButacas(butacas) {
    var butacasOcupadas = 0;
    var butacasLibres = 0;
    for (var i = 0; i < butacas.length; i++) {
        if (butacas[i] === true) {
            butacasOcupadas++;
        }
        else {
            butacasLibres++;
        }
    }
    return console.log("Hay ".concat(butacasOcupadas, " butacas ocupadas y ").concat(butacasLibres, " butacas libres."));
}
recorrerButacas(butacas);
