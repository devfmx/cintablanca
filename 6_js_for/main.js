/* 
    Estructuras de Control:
     Ciclos For / For Loop
*/

/*
    for ( 1; 2; 3 ){
        // bloque
    }

    1. Variable de Control / iterador
    2. Condición límite (condición de ejecución)
    3. Cómo cambiará la variable de control cada iteración
*/

for ( var i=0; i<11; i++) {
    if (i !== 0){
        console.log(i);
    }
}

for ( var i=1; i<11; i++ ) {
    
    var a = 10;
    var b = 20;
    var suma = a + b;
    console.log(suma);

}

/*
    Los arreglos guardan una lista 
    de elementos cuyas posiciones
    se numeran a partir del 0
*/

var arreglo = [
    "uno",  // Posición 0 del Arreglo
    2,      // Posición 1 del Arreglo
    true    // Posición 2 del Arreglo
];

//console.log(  arreglo[1], arreglo[2]  );

var top_5_canciones = [
    "Imagine",
    "Ramito de Violetas",
    "Allá en la Fuente",
    "QuenPompó",
    "17 Años"
];

// console.log(top_5_canciones);

// Forma Manual de mostrar cada posición de un arreglo...

// console.log("En primer lugar: " + top_5_canciones[0]);
// console.log("En segundo lugar: " + top_5_canciones[1]);
// console.log("En tercer lugar: " + top_5_canciones[2]);
// console.log("En cuarto lugar: " + top_5_canciones[3]);
// console.log("En quinto lugar: " + top_5_canciones[4]);

// for (var i=0; i<5; i++) {
//     console.log( top_5_canciones[i] )
// }


// Forma dinámica/automática de mostrar cada posición

var top_peliculas = [
    "El Padrino",
    "Sueño de Fuga",
    "Milla Verde",
    "Inception",
    "The Shining",
    "2001: Odisea",
    "Barry Lyndon"
]

for (var i=0; i<top_peliculas.length; i++){
    console.log(top_peliculas[i]);
}
