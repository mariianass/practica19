import Estudiante from "./estudiante.js";

let estudiante = new Estudiante();
estudiante.nombre = "Mariana";
estudiante.carrera = "ISW";

console.log(estudiante);
console.log(estudiante.saludar());
console.log(estudiante.verPromedio());