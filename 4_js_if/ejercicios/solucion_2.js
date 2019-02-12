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

if (j1 === j2){
    alert("Empate");
} 

// Jugador 1 Escoge Piedra
else if (j1 === "piedra"){

    if (j2 === "tijera"){
        alert("Gana Jugador 1");
    } 
    
    else if (j2 === "papel"){
        alert("Gana Jugador 2");
    }
}

// Jugador 1 Escoge Papel
else if (j1 === "papel"){

    if (j2 === "tijera"){
        alert("Gana Jugador 2");
    } 
    
    else if (j2 === "piedra"){
        alert("Gana Jugador 1");
    }
}

// Jugador 1 Escoge Tijera
else if (j1 === "tijera"){

    if (j2 === "papel"){
        alert("Gana Jugador 1");
    } 
    
    else if (j2 === "piedra"){
        alert("Gana Jugador 2");
    }
}