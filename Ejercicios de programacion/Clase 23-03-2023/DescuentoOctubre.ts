/*Una tienda al cumplir años en octubre ofrece un descuento del 15% a sus clientes en todas sus compras 
Desarrolle un algoritmo que dada una compra: precio unitario , cantidad y el mes , indicados por el usuario , determine si el cliente tiene descuento o no*/

import * as rls from "readline-sync";

const precUnt: number = rls.questionFloat("Ingrese Precio Producto: ");
const Cant: number = rls.questionInt("Ingrese Cantidad del producto: ");
const Mes: string = rls.question("Ingrese mes de la compra: ");
const Subtotal: number = precUnt * Cant;
let descuento : number = Subtotal * 0.15;
let PreciocnDes : number = Subtotal - descuento;

if (Mes === "Octubre"){
     console.log("Usted tiene un descuento del 15% en el mes de Octubre: ","El total de su compra es: ",PreciocnDes);
}
    else {
        console.log("Usted no tiene descuento: ","El total es: ",Subtotal); 
}

