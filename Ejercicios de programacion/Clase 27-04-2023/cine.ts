/*Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay 
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
• La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada*/

const butacas : boolean[]= new Array(true,false,false,true,true,false,false,true);

function recorrerButacas(butacas:boolean[]):any{
    let butacasOcupadas:number = 0;
    let butacasLibres : number = 0;
        for (let i : number =0; i <butacas.length;i++){
            if (butacas[i]===true){
                butacasOcupadas++;
            }else{
                    butacasLibres++;
                }
        }
        return console.log(`Hay ${butacasOcupadas} butacas ocupadas y ${butacasLibres} butacas libres.`);
}

recorrerButacas(butacas);