/* Desarrolle un algoritmo que, dada una posicion en una carrera se determine el tipo de medalla que va a recibir.
    °Tenga en cuenta que para el primer puesto se entrega medalla de oro , segundo puesto medalla de plata y tercer puesto medalla de bronce.
    En caso de que quede en otra posicion se entrega certificado de participacion*/

    import * as rls from "readline-sync";

    const PosLlegada : number = rls.questionInt("Ingrese posicion de llegada: ");
    let mensaje : string = ("");
        
    if (PosLlegada <=0){
            mensaje = "Debe ser un entero positivo";

        }else if (PosLlegada === 1) {
            mensaje = "Medalla de Oro";

    }    else if (PosLlegada === 2){
            mensaje = "Medalla de Plata";

        }else if (PosLlegada === 3){
            mensaje = "Medalla de Bronce";

        }else  {
            mensaje ="Entregar certificado de participacion";
    }

    
console.log(mensaje);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ahora utilizamos switch/case, evalua  una sola vez y dependiendo de la respuesta que ejecuta un bloque.
import * as rls from "readline-sync";

const PosLlegada : number = rls.questionInt("Ingrese posicion de llegada: ");
let mensaje : string = ("");

if (PosLlegada <=0){
    mensaje = "Debe ser un entero positivo";
}else{

}
   
switch (PosLlegada){

    case 1:
        mensaje = "Medalla de Oro"; 
        break;
    
    case 2:
        mensaje = "Medalla de Plata";
        break;

    case 3:
        mensaje = "Medalla de Bronce";
        break;

    default:
        mensaje ="Entregar certificado de participacion";
       
}
    console.log(mensaje);
