/*
    Crear una aplicación web con JavaScript
    que permita a dos usuarios jugar una
    partida de piedra, papel o tijera. 
    Al terminar la partida, debe anunciarse
    el ganador de la misma.
*/

// Pido a los usuarios que introduzcan una decisión
var j1 = prompt("Jugador 1: Elige piedra, papel o tijera");
var j2 = prompt("Jugador 2: Elige piedra, papel o tijera");

// Empate
if( j1 === j2 ){
    alert("Empate");
}

// Casos donde gana el Jugador 1
if( j1 === "piedra" && j2 === "tijera" ){
    alert("Gana el Jugador 1");
}

if( j1 === "papel" && j2 === "piedra" ){
    alert("Gana el Jugador 1");
}

if( j1 === "tijera" && j2 === "papel" ){
    alert("Gana el Jugador 1");
}

// Casos donde gana el Jugador 2
if( j2 === "piedra" && j1 === "tijera" ){
    alert("Gana el Jugador 2");
}

if( j2 === "papel" && j1 === "piedra" ){
    alert("Gana el Jugador 2");
}

if( j2 === "tijera" && j1 === "papel" ){
    alert("Gana el Jugador 2");
}