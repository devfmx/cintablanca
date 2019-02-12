// Variables
let nombre = "Mauricio";
let saludo = "Hola cinta blanca";
let numero = 25;

// Declaración
let miVariable;

// Asignación 
miVariable = 42;

// JavaScript es sensible a minúsculas y mayúsculas
var uno = "1";
var Uno = "10";
var uNo = "100";
var unO = "1000";

// Tipos de Datos
var texto = "Esta es una cadena de texto..." // String
var numero = 100 // Number
var booleano = true // Boolean
var arreglo = ["uno", "dos", "tres"] // Array

/* 
    Las variables pueden tomar cualquier nombre, siempre y cuando
    no utilices una palabra reservada de JavaScript como nombre.
*/

// let x = 100
// let y = 30

// Avanzado
let arreglos = [];
let objetos = {};
let funciones = () => {};

// Operadores aritméticos
// + - * / % 
console.log( 5 + 3 * 2 );
console.log( 10 - 8 / 6);
console.log( 6 % 3 );

// Input
prompt('ingresa tu nombre');

// Output
alert('Descarga ya!');
console.log( typeof nombre );

// Ejemplo de Input & Output
let nombre = prompt('nombre');
let apellido = prompt('apellido');
let nacimiento = prompt('nacimiento');

console.log(nombre, apellido, nacimiento);
alert(nombre, apellido, nacimiento);

// Convertir el input en numero
nacimiento = Number(nacimiento);

let edad = 2019 - nacimiento;

console.log( nombre + " " + apellido + " " + edad);