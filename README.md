# midulive-curso-react

## Índice
* 01 - Introducción a React
* 02 - 
* Enlaces de interés

## 01 - Introducción a React 

🔗 [Vídeo de Youtube](https://www.youtube.com/watch?v=7iobxzd_2wY&t=127s)

### ¿Qué es React?
React es una biblioteca de JavaScript para construir interfaces de usuario. Es agnóstica de la plataforma, por lo que puede usarse para desarrollar páginas web, aplicaciones móviles o incluso aplicaciones de terminal.

### Enfoque declarativo vs. imperativo
Vanilla JavaScript sigue un enfoque imperativo, es decir, describes paso a paso cómo debe funcionar el programa. En cambio, React, sigue un enfoque declarativo, en el que describes qué quieres que haga el programa. Este último enfoque escala mejor, ya que necesitas menos instrucciones.

Ejemplo de enfoque imperativo con HTML y Vanilla JavaScript:

```html
<!-- HTML --> 
<button data-id="123">Me gusta</button>
<button data-id="456">Me gusta</button>
<button data-id="789">Me gusta</button>
```

```js
// Vanilla JavaScript

// recuperamos el botón
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    // al hacer click en el botón, tenemos que ejecutar una función
    button.addEventListener('click', function() {
    // recuperar la id del atributo del HTML
    const id = button.getAttribute('data-id');

    // llamar a un servicio para actualizar si me gusta
    // toggleLike(id)

    if (button.classList.contains('liked')){
        button.classList.remove('liked');
        button.innterText = 'Me guta';
    } else {
        button.classList.add('liked');
        button.innerText = 'Quitar me gusta';
        }
    })
})
```
### Basado en componentes
React organiza la interfaz en componentes reutilizables. Llamamos árbol de componentes al conjunto de componentes que forman una interfaz. Este inicia desde una raíz <code>root</code>.

### Inyectar React
El siguiente código se podría utilizar para inyectar React en cualquier componente de tu página web.

```html
<!-- Crear elemento donde queremos que se renderice la apliación --> 
<div id="app"></div>
```

```js
// Importar dependencia de ReactDOM
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

// Recuperar elemento del DOM y crear aplicación
const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);

// Renderizar
root.render('Hola React');
```

### Renderizar un elemento
React funciona renderizando elementos, no texto HTML. De esta manera nadie puede inyectar código. Para crear un elemento necesitamos definir tres parámetros:
- El elemento que queremos crear.
- Las propiedades o atributos que queremos que tenga nuestro elemento.
- Lo que está envolviendo el elemento.

```html
<div id="app"></div>
```

```js
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);
const button = React.createElement('button', {'data-id: 123'}, 'Me gusta');

// ✅ Correcto
root.render(button);

// ⛔️ Incorrecto
root.render('<button>Hola React</button>');
```

### Renderizar varios elementos: React.Fragment
En React no se puede renderizar más de un elemento a la vez. Para ello, podemos envolver los elementos en otro elemento. Para evitar la creación de un <code>div</code> innecesario, se utiliza el elemento <code>React.fragment</code>.

```html
<div id="app"></div>
```

```js
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);

const button = React.createElement('button', {'data-id: 123'}, 'Button 1');
const button2 = React.createElement('button', {'data-id: 456'}, 'Button 2');
const button3 = React.createElement('button', {'data-id: 789'}, 'Button 3');

const app = React.createElement(React.Fragment, null, [button, button2, button3]);

// ✅ Correcto
root.render(app);

// ⛔️ Incorrecto
root.render(button, button2, button3);
```

### JSX
Para simplificar nuestro código y conseguir un enfoque más declarativo, podemos utilizar JSX, una extensión de JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript.

```html
<div id="app"></div>
```

```jsx
import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);

const app = (
    <React.Fragment>
        <button data-id="123">Button 1</button>
        <button data-id="456">Button 2</button>
        <button data-id="789">Button 3</button>
    </React.Fragment>
);

root.render(app);
```

Esta transformación la hacen herramientas como [SWC](https://swc.rs/playground) o [Babel](https://babeljs.io/). Las siguientes constantes son equivalentes:

```jsx
// React
const button = React.createEelement('button', {"data-id: 123"}, 'Button 1')

// JSX
const buttonJSX = <button data-id="123">Button 1</button>
```

En JSX podemos incluir expresiones JavaScript envolviéndolas entre llaves {}. Sin embargo, no se pueden usar declaraciones que no devuelvan un valor (como un <code>if</code> clásico).

```jsx
// Incluir una constante entre llaves
const name = 'Miguel'
<h1>Hola, {name}>

// Evaluar una expresión 
const element = <strong>Numero aleatorio. {Math.random()}</strong>

// Especificar atributos en formato camelCase
<button tabIndex="1">
```

### Crea tu primera aplicación con React
Para poder trabajar con React y JSX, necesitamos un empaquetador de aplicaciones web. [Create React App](https://create-react-app.dev/) es la forma oficial, pero [Vite](https://vite.dev/) funciona mejor.

Un componente es una función que devuelve un elemento. El nombre del componente debe ir en <code>PascalCase</code> para que React pueda diferenciar entre elementos HTML y Componentes de React. Además, debe evitarse el uso de nombres imperativos como <code>CreateButton</code>.

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Button = ({text}) => {
  return (
    <button>{text}</button>
  )
}

root.render(
  <React.Fragment>
    <Button text="Button 1" />
    <Button text="Button 2" />
    <Button text="Button 3" />
  </React.Fragment>
)
````