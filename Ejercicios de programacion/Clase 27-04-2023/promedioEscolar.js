"use strict";
/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
• Se debe permitir obtener el  promedio anual (es decir, de sus  tres notas) de un alumno  (ingresado por el usuario).
 • Luego de resolverlo, pensar en  aprovechar métodos y discutir  cómo representar la información*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
// Creamos dos arreglos para almacenar los nombres de los alumnos y sus notas
var nombresAlumnos = [];
var notasAlumnos = [];
// Creamos una función para cargar los datos de un alumno
function cargarAlumno() {
    var nombreAlumno = rls.question("Ingrese el nombre del alumno: ");
    // Verificamos que el nombre no sea vacío
    if (nombreAlumno.trim() === "") {
        console.log("El nombre del alumno no puede estar vacío");
        return;
    }
    var notas = [];
    // Pedimos las notas de los tres trimestres
    for (var i = 1; i <= 3; i++) {
        var notaStr = rls.questionInt("Ingrese la nota del trimestre ".concat(i, ": "));
        // Verificamos que la nota sea un número válido
        var nota = Number(notaStr);
        if (isNaN(nota) || nota < 1 || nota > 10) {
            console.log("La nota ingresada es inválida");
            return;
        }
        notas.push(nota);
    }
    // Agregamos los datos del alumno a los arreglos
    nombresAlumnos.push(nombreAlumno);
    notasAlumnos.push(notas);
    console.log("Alumno cargado correctamente");
}
// Creamos una función para calcular el promedio anual de un alumno
function promedioAnual(nombreAlumno) {
    // Buscamos el índice del alumno en el arreglo de nombres
    var index = nombresAlumnos.indexOf(nombreAlumno);
    // Si no encontramos al alumno, devolvemos NaN
    if (index === -1) {
        return NaN;
    }
    // Calculamos el promedio anual
    var notas = notasAlumnos[index];
    var promedio = (notas[0] + notas[1] + notas[2]) / 3;
    return promedio;
}
// Ejemplo de uso
cargarAlumno();
var nombreAlumno = rls.question("Ingrese el nombre del alumno para calcular su promedio anual: ");
var promedio = promedioAnual(nombreAlumno);
if (isNaN(promedio)) {
    console.log("No se encontr\u00F3 al alumno ".concat(nombreAlumno));
}
else {
    console.log("El promedio anual de ".concat(nombreAlumno, " es ").concat(promedio));
}
