/* 
    Crea un arreglo con los siguientes platillos: 
    1) Empanada
    2) Tostada
    3) Garnacha
    4) Tamal
    5) Picadillo

    1.-Mediante un ciclo for, muestra todos los platillos
    2.-Mediante for e if, muestra solo la garnacha y el tamal
    3.-Mediante for e if, muestra solo los elementos impares
    4.-Mediante solo ciclo flor, muestra los elementos que sean pares
*/

var platillos = [
    "Empanada",     // 0
    "Tostada",      // 1
    "Garnacha",     // 2
    "Tamal",        // 3
    "Picadillo"     // 4
];

// 1)
for (var i=0; i<platillos.length; i+=1) {
    console.log( platillos[i] );
}

// 2.1) Una forma de resolverlo
for (var i=0; i<5; i++) {
    if ( platillos[i] === "Garnacha" || platillos[i] === "Tamal" ) {
        console.log( platillos[i] );
    }
}

// 2.2) Otra forma de resolverlo
for (var i=0; i<5; i++) 
{
    if ( platillos[i] === "Garnacha")
    {
        console.log(platillos[i]) 
    } 
    else if (platillos[i] === "Tamal")
    {
        console.log(platillos[i]);
    }
    // else console.log("No es garnacha ni tamal u_u'");
}

// 3)
for (var i=0; i<5; i++) {
    if (i%2 != 0){
        console.log( platillos[i] );
    }
}

// 4)
// Imprimir numeros pares solo con for...
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Assignment_Operators
for (var i=0; i<5; i+=2) {
    console.log( platillos[i] );
}

// Imprimir numeros impares solo con for...
for (var i=1; i<5; i+=2) {
    console.log( platillos[i] );
}