"use strict";
/*Ejercicio Validar altura Desarrolle un algoritmo que de acuerdo a la altura de una persona, decida si puede entrar o no a un parque de diversiones
    
    °Para poder subir a la montaña rusa debe medir 1.30 mts o mas */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var AlturaPersona = rls.questionFloat("Por favor indique su altura: ");
if (AlturaPersona >= 1.30) {
    console.log("Usted Puede pasar");
}
else {
    console.log("Usted no tiene la altura necesaria para pasar");
}
