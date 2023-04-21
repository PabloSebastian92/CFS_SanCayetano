/* Implemente un metodo llamado cantidadDeDivisores que reciba un numero entero y devuelva la cantidad de divisores 
por ej: para el numero 16 , sus divisores son 1,2,4,8,16 por lo que la respuesta deberia ser 5
reutilizar el metodo esMultiplo del ejercicio anterior.*/



function esMultiplo(numero1:number,numero2:number):boolean{
    return (numero1 % numero2)===0;
}       

function cantidadDeDivisores(numero:number):number{
    let cantidad:number=0;
        for (let i:number=0; i<=numero;i++){
            if(esMultiplo(numero,i)){
                cantidad=cantidad + 1;
            }
        }
                    return cantidad;   
}    
             
console.log(cantidadDeDivisores(16)); 




   
 
