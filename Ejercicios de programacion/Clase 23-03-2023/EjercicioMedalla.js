"use strict";
/* Desarrolle un algoritmo que, dada una posicion en una carrera se determine el tipo de medalla que va a recibir.
    °Tenga en cuenta que para el primer puesto se entrega medalla de oro , segundo puesto medalla de plata y tercer puesto medalla de bronce.
    En caso de que quede en otra posicion se entrega certificado de participacion*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var PosLlegada = rls.questionInt("Ingrese posicion de llegada: ");
var mensaje = ("");
if (PosLlegada <= 0) {
    mensaje = "Debe ser un entero positivo";
}
else if (PosLlegada === 1) {
    mensaje = "Medalla de Oro";
}
else if (PosLlegada === 2) {
    mensaje = "Medalla de Plata";
}
else if (PosLlegada === 3) {
    mensaje = "Medalla de Bronce";
}
else {
    mensaje = "Entregar certificado de participacion";
}
console.log(mensaje);
