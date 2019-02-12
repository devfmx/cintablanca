# Estructuras de Control #

Permiten tomar decisiones y realizar un proceso repetidas veces. 
Se trata de estructuras muy importantes, ya que son las encargadas de controlar el flujo de un programa, según los requerimientos del mismo

![alt text](https://www.fing.edu.uy/inco/cursos/fpr/wiki/images/3/39/Flujoifthenelse.png)

**Condicional IF - ELSE**

Ejecutar sentencias en línea recta no es la única opción que tenemos. Una alternativa es la ejecución condicional, en donde escogemos entre dos rutas diferentes basados en un valor Booleano.

```javascript
var num = Number(prompt("Dame un número", "0"));

if (num < 10)
  alert("Chico");
else if (num < 100)
  alert("Mediano");
else
  alert("Grande");
```

### Operadores Relacionales ###

Cada uno de estos operadores llamará a la función `valueOf()` en cada operando antes de realizar una comparación.

```javascript
// Operador mayor que (>)
console.log( 4 > 3 ); // Output: true

// Operador mayor o igual (>=)
console.log( 4 >= 3 ); // Output: true
console.log( 3 >= 3 ); // Output: true

// Operador menor que (<)
console.log( 3 < 4 ); // Output: true

// Operador menor o igual (<=)
console.log( 3 <= 4 ); // Output: true
```

### Operadores de Comparación ###

Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operadores pueden ser númericos, de cadena de caracteres (Strings), lógicos o de objetos. 

```javascript
// Operador de igualdad (==)
console.log( 3 == "3" ); // Output: true

// Operador de desigualdad (!=)
console.log( 4 != "3" ); // Output: true

// Estrictamente iguales (===)
console.log( 3 === 3 ); // Output: true

// Estrictamente desiguales (!==)
console.log( 3 !== "3" ); // Output: true
```

### Operadores Lógicos ###

Tipicamente usados con valores boleanos (lógicos) y, cuando es así, estos operadores retornan igualmente un valor boleano.

```javascript
// AND lógico (&&)
console.log( 5 > 4 && 3 > 2); // Output: true

// OR lógico (||)
console.log( 5 > 4 || 3 > 4); // Output: true
```

***Quiero saber mas...***
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
https://www.w3schools.com/js/js_if_else.asp
