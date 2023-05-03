import * as rls from "readline-sync";

const dimension : number = rls.questionInt ("Ingrese dimension del arreglo:");

let arr1 : number []=new Array (dimension);
let arr2 : number []= new Array(dimension);

for (let i : number = 0; i<arr1.length;i++){
    arr1[i]= rls.questionInt(`Ingrese un numero que quiere poner en el lugar ${i+1} del arreglo 1:`);
}
for (let j: number = 0; j<arr2.length;j++){
    arr2[j] = rls.questionInt(`Ingrese un numero que quiere poner en el lugar del arreglo 2 ${j+1}:`);
}

function productoEscalar(arr1: number [] ,arr2:number[]): number{
    let producto : number = 0;
    for (let i : number = 0; i<arr1.length;i++ ){
        producto = producto + arr1[i]* arr2[i];
    }
    return producto;
}

console.log(productoEscalar(arr1,arr2));