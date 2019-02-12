// ECMA 6
// let numero = 20;

// ECMA 5
// var numero = 20;

/*
        Estructuras de Control

    Nos permiten modificar el flujo de 
    ejecución de nuestro código
*/
​
// IF-ELSE

// Operadores relacionales
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators#Operadores_relacionales
// >=
// <=
// >
// <

if( 10 > 7 ){
  console.log("Diez es mayor que siete... dah"); 
}
​
let edad = 20;
​
if (edad > 17){
  console.log("Eres mayor de edad!");
} else if(edad < 18) {
  console.log("No eres mayor de edad :'(");
}
​
// Operadores de Comparación

// operador de asignacion (no confundir con los demás)
// =
let letra = "a";
console.log(letra);
letra = "b";
console.log(letra);
letra = "c";
console.log(letra);
​
// comparacion de igualdad
// ==
let nombre_1 = "Rob";
let nombre_2 = "Mau";
// console.log(
//   nombre_1 == nombre_2
// );
​
// comparación de identidad
// ===
let num_1 = 10;   // Tipo de Dato Number
let num_2 = "10";  // Tipo de Dato String
​
// console.log(
//   num_1 === num_2
// );
​
// comparación desigualdad
// !=
let raza_1 = "pitbull";
let raza_2 = "Pitbull";
​
// console.log(
//   raza_1 !== raza_2
// );

let edad = prompt("Introduce tu edad");
​
if (edad >= 18) {
  alert("Eres mayor de edad :)")
} else {
  alert("No eres mayor de edad :'(")
}

// Evaluar más de una expresión​ con Operadores Lógicos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_l%C3%B3gicos

if (5>1 && 5>3){
  // este bloque se ejecuta
  // si se cumple la condición
}

if (8 > 5 && 8 > 3 && 8 > 1 && 8 > 4){
    console.log("Al evaluar la expresión, esta retorna verdadero");
}
​
// Evaluar una u otra expresión
if (5 > 1 || 5>3) {
    console.log("Una u otra debe ser cierta para que este mensaje aparezca");
}