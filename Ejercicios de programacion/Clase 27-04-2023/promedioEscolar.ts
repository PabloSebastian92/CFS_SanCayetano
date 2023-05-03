/*Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres 
• Se debe permitir obtener el  promedio anual (es decir, de sus  tres notas) de un alumno  (ingresado por el usuario).
 • Luego de resolverlo, pensar en  aprovechar métodos y discutir  cómo representar la información*/

 import * as rls from "readline-sync";

const nombresAlumnos: string[] = [];
const notasAlumnos: number[][] = [];


function cargarAlumno(): void {
  const nombreAlumno = rls.question("Ingrese el nombre del alumno: ");
    if (nombreAlumno === "") {
      console.log("El nombre del alumno no puede estar vacío");
        return;
    }

  const notas: number[] = [];

  for (let i = 1; i <= 3; i++) {
    const notaIngresada = rls.questionInt(`Ingrese la nota del trimestre ${i}: `);
      notas.push(notaIngresada);
  }
  nombresAlumnos.push(nombreAlumno);
  notasAlumnos.push(notas);
  console.log("Alumno cargado correctamente");
}

function promedioAnual(nombreAlumno: string): number {
  const j = nombresAlumnos.indexOf(nombreAlumno);
    if (j=== -1) {
      return NaN;
    }
  const notas = notasAlumnos[j];
  const promedio = (notas[0] + notas[1] + notas[2]) / 3;
  return promedio;
}

cargarAlumno();
const nombreAlumno = rls.question("Ingrese el nombre del alumno para calcular su promedio anual: ");
const promedio = promedioAnual(nombreAlumno);
if (isNaN(promedio)) {
  console.log(`No se encontró al alumno ${nombreAlumno}`);
} else {
    console.log(`El promedio anual de ${nombreAlumno} es ${promedio}`);
  }