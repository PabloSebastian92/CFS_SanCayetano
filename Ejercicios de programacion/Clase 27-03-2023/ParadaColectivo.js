"use strict";
/* Simular la espera de un colectivo
°Cuando llegamos a la parada , miramos si el colectivo llego a la parada
°Siempre tenemos que esperar antes que llegue */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var LlegoColect = rls.question("Llego el colectivo?: "); // asumamos que el usuario solo pueda ingresar  S para si , N para no.
while (LlegoColect == "N") {
    console.log("Sigo esperando el colectivo");
    LlegoColect = rls.question("Ya vino el colectivo?: ");
    if (LlegoColect == "S") {
        console.log("Llego el colectivo!!");
    }
    else {
        console.log("Ingrese una respuesta valida: ");
        LlegoColect = rls.question("Cual es tu nueva respuesta?: ");
    }
}
