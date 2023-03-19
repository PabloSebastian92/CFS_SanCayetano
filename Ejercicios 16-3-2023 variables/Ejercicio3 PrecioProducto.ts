/*Implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto despues de aplicarle un descuento
 * El precio inicial del producto se ingresa por pantalla
 * El descuento a aplicar es del 10%. El valor multiplicado 0.1
 * El precio final debe ser mostrado en pantalla.
 */
import * as rls from "readline-sync";

const precio: number = rls .questionFloat("Ingrese precio del producto: ");
const porcentajededescuento: number = 0.1;
const preciofinal: number = precio * porcentajededescuento;
const preciocondescuento: number = precio - preciofinal;

console.log("El precio con descuento es: ", preciocondescuento);