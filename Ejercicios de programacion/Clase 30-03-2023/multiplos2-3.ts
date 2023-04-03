/* Diseñe un algoritmo que visualice los multiplos de 2 o de 3 empezando desde 1 al 100 
En caso de ser multiplo de 2 y de 3 a la vez , mostrarlo 1 sola vez*/

let result : string = "";

for (let i : number = 1; 1 <=100; i++){
    if (i % 2 === 0 || i % 3 === 0){
       result = result + i + " "; 
    }
}
    console.log(result);

    