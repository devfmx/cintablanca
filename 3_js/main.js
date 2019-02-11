// let string = 'aprendiendo a aprender'
// let saludo = false
// let numero = 100
// let booleanos = true

// let x = 100
// let y = 30

// // Avanzadas
// let arreglos = []
// let objetos = {}
// let funciones = () => {}

// // + - * / %

// // input
// prompt('ingresa tu nombre')

// // output
// alert('Descarga ya!')
// console.log( typeof saludo )

// ------------------------------------------
let nombre = prompt('nombre')
let apellido = prompt('apellido')
let nacimiento = prompt('nacimiento')

// convertir el input en numero
nacimiento = Number(nacimiento)

let edad = 2019 - nacimiento

console.log( nombre + " " + apellido + " " + edad)