# HTML #

***¿Qué es?***

"Lenguaje de marcado de hipertexto", se encarga de definir la estructura de un sitio web, define los elementos que van a existir, y jerarquiza los elementos que pertenecen al mismo tipo.


Basado en etiquetas: las etiquetas son el elemento fundamental de HTML. Se componen de los caracteres `<`,  `>` y `/`. La mayoría de etiquetas tienen etiqueta de inicio y etiqueta de cierre, se diferencian porque la etiqueta de cierre contiene el caracter `/`antes del nombre

```html
<html> </html>
<body> </body>
```

### HTML5 ###

Es el estandar actual de HTML que permite usar etiquetas que mejoran la semántica de un sitio web. Al principio de un documento se incluye `<!DOCTYPE html>` para que el navegador interprete que se está usando este estandar.


***Estructura básica de un documento HTML***

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

***head***
Dentro de esta etiqueta se colocan elementos que el navegador va a usar para pero no se van a mostrar en el cuerpo de la página. Aqui van elementos como el título de nuestra página, la imagen que aparece en la pestaña del navegador, o las palabras clave para indexar en buscadores.

***body***
Todos los elementos que se escriban dentro de esta etiqueta se van a mostrar en el website. aquí van las etiquetas de texto, imagenes, botones, inputs, etc.

***title***
Muestra el texto introducido entre las etiquetas de apertura y cierre, en la pestaña del navegador.

### Etiquetas de texto ###

***Etiquetas de texto***
Es buena práctica que todos los texto vayan dentro de alguna etiqueta. 

```html
<h1>Etiqueta para título</h1>
<h2>Etiqueta de subtitulo</h2>
<p>Etiqueta de parrafo</p>
<span>span</span>
<strong>Negritas</strong>
<label>Label</label>
```

***Etiqueta img***
Se usa para integrar imagenes a nuestros sitios web. No tiene etiqueta de cierre y tiene un atributo especial `src` que es la ubicación de la imagen.

```html
<img src="imagen.jpg" />
```

***Etiqueta a***
Usada para poner hipervinculos a una dirección en particular. Contiene el atributo `href`
que contiene la url a donde seremos redireccionados.

```html
<a href="https://google.com"> texto </a>
```

***listas***
Son estructuras que definen una lista, pueden ser ordenadas `ol` o desordenadas `ul`. las listas contienen items de lista.

```html
<ul>
    <li>item de lista</li>
    <li>item de lista</li>
</ul>
```
***Quiero saber mas...***

https://www.w3schools.com/html/html_intro.asp
https://developer.mozilla.org/es/docs/Web/HTML
