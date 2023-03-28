"use strict";
/*Una tienda al cumplir años en octubre ofrece un descuento del 15% a sus clientes en todas sus compras
Desarrolle un algoritmo que dada una compra: precio unitario , cantidad y el mes , indicados por el usuario , determine si el cliente tiene descuento o no*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var precUnt = rls.questionFloat("Ingrese Precio Producto: ");
var Cant = rls.questionInt("Ingrese Cantidad del producto: ");
var Mes = rls.question("Ingrese mes de la compra: ");
var Subtotal = precUnt * Cant;
var descuento = Subtotal * 0.15;
var PreciocnDes = Subtotal - descuento;
if (Mes === "Octubre") {
    console.log("Usted tiene un descuento del 15%: ", "El total de su compra es: ", PreciocnDes);
}
else {
    console.log("Usted no tiene descuento: ", "El total es: ", Subtotal);
}
