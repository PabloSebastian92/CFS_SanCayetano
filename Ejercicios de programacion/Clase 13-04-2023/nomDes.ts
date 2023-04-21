import * as rls from "readline-sync";

const dimArreglo: number = rls.questionInt("Ingrese la dimension del arreglo: ");
let arr : string []= new Array (dimArreglo);

for (let i =0; i<arr.length;i++){
    arr[i] = rls.question("Ingrese nombre:");
}