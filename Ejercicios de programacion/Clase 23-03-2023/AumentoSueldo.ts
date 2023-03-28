/*Una empresa desea premiar a sus empleados con un aumento de sueldo. Este aumento se ajusta a los sig datos: tabla filmina
Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a aplicar y se lo muestre*/

import * as rls from "readline-sync";

let sueldo : number = rls.questionFloat("Ingrese sueldo del empleado: ");

if (sueldo <= 15000){
    console.log("Sueldo con aumento: ", sueldo * 1.20);

}else if (sueldo > 20001 && sueldo < 25000){
    console.log("Su sueldo aumentado es: ", sueldo * 1.10);

} else if (sueldo >= 25000){
    console.log("No tiene aumento de sueldo");
}