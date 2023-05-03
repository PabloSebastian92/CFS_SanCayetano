"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dimension = rls.questionInt("Ingrese dimension del arreglo:");
var arr1 = new Array(dimension);
var arr2 = new Array(dimension);
var producto = 0;
for (var i = 0; i < arr1.length; i++) {
    arr1[i] = rls.questionInt("Ingrese un numero que quiere poner en el lugar ".concat(i + 1, ":"));
}
for (var j = 0; j < arr2.length; j++) {
    arr2[j] = rls.questionInt("Ingrese un numero que quiere poner en el lugar ".concat(j + 1, ":"));
}
function productoEscalar(arr1, arr2) {
    var producto = 0;
    for (var i = 0; i < arr1.length; i++) {
        producto = producto + arr1[i] * arr2[i];
    }
    return producto;
}
console.log(productoEscalar(arr1, arr2));
