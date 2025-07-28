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

Comentarios en JSX:
```jsx
{ /* aquí un comentario */ }
```

### Crea tu primera aplicación con React
Para poder trabajar con React y JSX, necesitamos un empaquetador de aplicaciones web. [Create React App](https://create-react-app.dev/) es la forma oficial, pero [Vite](https://vite.dev/) funciona mejor.

Un componente es una función que devuelve un elemento. Su nombre debe ser declarativo, evitando estilos imperativos como CreateButton. Además, debe escribirse en formato <code>PascalCase</code> para que React pueda distinguirlo de los elementos HTML.

Un componente es una factoría de elementos, es decir, un componente es una función que al ejecutarla devuelve elementos. Los elementos son los que renderiza React.

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
```

### Crear un componente
1. Creamos un archivo App.jsx en el que renderizaremos la aplicación.
```jsx
// 📁 src/App.jsx
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

//Aquí isFollowing, name y userName son props.
export function App () {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing name="Adri Álvarez" userName="alvarezAdri_"/>
      <TwitterFollowCard isFollowing={false} name="Miguel Ángel Durán" userName="midudev"/>
    </section>
  )
}
```

2. Creamos nuestro componente. Como JSX se transforma en JavaScript y <code>class</code> es una palabra reservada en JavaScript, utilizaremos <code>className</code> para añadir estilos. Los estilos se definirán en 📁 src/App.css. 

```jsx
// 📁 src/TwitterFollowCard.jsx
export function TwitterFollowCard ({ name, userName, isFollowing }) {
  return (
      <article className='tw-followCard'>
      <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' alt="El avatar de Adri" src={`/avatar-${userName}.jpg`} />
          <div className='tw-followCard-info'>
              <strong>{name}</strong>
              <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
      </header>

      <aside>
          <button className='tw-followCard-button'>
              Seguir
          </button>
      </aside>
    </article>
  )
}
```

### Props/ propiedades
Las props son los datos que se pasan a un elemento JSX. Por ejemplo, <code>className</code>, <code>scr</code>, <code>alt</code>, <code>height</code> y <code>width</code> son algunas de las props que se pueden passar a un elemento <code>img</code>. Son la base de la reutilización de componentes.

Los props funcionan de manera similar a los atributos en HTML, ya que permiten pasar información a los componentes. Estos valores se agrupan en un objeto llamado <code>props</code>, que se recibe como parámetro en la función del componente. Para acceder a un valor específico, se utiliza la notación de punto, por ejemplo: <code>{props.nombre}</code>.

Los props se escriben en <code>camelCase</code>.

Utilizando el objeto <code>props</code>:
```jsx
function Person(props) {
  return(
    <div className="person">
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <Person nombre="Pedro" edad="25" >
    </div>
  )
}
```

Desestructurando los props directamente como parámetros del componente:
```jsx
function Person({nombre, edad}) {
  return(
    <div className="person">
      <h3>Nombre: {nombre}</h3>
      <p>Edad: {edad}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <Person nombre="Pedro" edad="25" />
    </div>
  )
}
```
Las <code>props</code> deben ser inmutables, en su lugar se pueden definir constantes nuevas. En el ejemplo siguiente, podemos ver que también se pueden pasar funciones como props.
```jsx
// 📁 src/TwitterFollowCard.jsx
export function TwitterFollowCard ({ formatUserName, name, userName, isFollowing }) {
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="El avatar de Adri" src={`/avatar-${userName}.jpg`} />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
    </article>
    )
}
```
```jsx
// 📁 src/App.jsx
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

// ⛔️ Incorrecto
// userName = `@${userName}`

// ✅ Correcto
const format = (userName) => `@${userName}`

export function App () {
  return (
    <section className="App">
      <TwitterFollowCard formatUserName={format} isFollowing name="Adri Álvarez" userName="alvarezAdri_"/>
      <TwitterFollowCard formatUserName={format} isFollowing={false} name="Miguel Ángel Durán" userName="midudev"/>
    </section>
  )
}
```

### La prop especial children
Un <code>children</code> es lo que envuelve un elemento. Solo existe uno, no hay children nombrados.
```jsx
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
        <TwitterFollowCard isFollowing userName="alvarezAdri_">
            Adri Álvarez { /* <- children */ }
        </TwitterFollowCard>

        <TwitterFollowCard isFollowing={false} userName="midudev">
            Miguel Ángel Durán { /* <- children */ }
        </TwitterFollowCard>
    </section>
  )
}
```
```jsx
export function TwitterFollowCard ({ children, userName, isFollowing }) {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' alt="El avatar de Adri" src={`/avatar-${userName}.jpg`} />
          <div className='tw-followCard-info'>
              <strong>{children}</strong>
              <span className='tw-followCard-infoUserName'>@{userName}</span>
          </div>
      </header>

      <aside>
          <button className='tw-followCard-button'>
              Seguir
          </button>
      </aside>
  </article>
  )
}
```

### Valores por defecto
```jsx
export function TwitterFollowCard ({ name, userName = 'unknown', isFollowing }) 
//...
```

### Pasar todas las props a la vez
Se puede utilizar el rest operator para pasar todas las propiedades del objeto como props. Puede ser mala práctica.
```jsx
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const adrialvarez = { isFollowing: true, userName: 'alvarezAdri_' }
    const midudev = { isFollowing: false, userName: 'midudev' }

    return (
        <section className="App">
            <TwitterFollowCard {... adrialvarez}>
                Adri Álvarez
            </TwitterFollowCard>
            
            <TwitterFollowCard {... midudev}>
                Miguel Ángel Durán
            </TwitterFollowCard>
        </section>
    )
}
```
### Estados en React
Los estados se usan para controlar los cambios en la interfaz. Normalmente, los estados vienen acompañados de un cambio visual.

Para poder utilizar los estados de React, necesitamos el hook <code>import { userState } from 'react'</code>. Las hooks nos permiten dotar de más funcionalidad a los componentes de React en diferentes puntos del renderizado.

Para definir un estado necesitamos 3 constantes:
```jsx
// Valor del estado por defecto 
const state = useState(false)

// Valor del estado
const isFollowing = state[0]

// Valor cuando el estado cambia
const setIsFollowing = state[1]
```

Gracias a la desestructuración de JavaScript, estas tres líneas equivalen a:
```jsx
const [isFollowing, setIsFollowing] = useState(false)
```

Cuando se utiliza una prop para inicializar un estado, es una buena práctica llamarla: <code>initialIsFollowing</code>. Para cambiar los estilos según el estado utilizaremos el renderizado condicional.

```jsx
import { useState } from 'react'
export function TwitterFollowCard ({ children, userName, initialIsFollowing}) {

const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

//...

<button className={buttonClassName} onClick={handleClick}>
  <span className='tw-followCard-text'>{text}</span>
  <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
</button>

//...
}

```

> Nota:    
Cuando un componente hijo usa <code>useState</code> con una prop del padre como valor inicial, ese valor solo se inicializa una vez, al montarse el componente. Si la prop del padre cambia después, el estado del hijo no se actualiza automáticamente.

### Virtual DOM
Cuando se utiliza código imperativo, debemos indicar exactamente qué elemento del DOM queremos cambiar.

React utiliza un DOM virtual para actualizar únicamente aquello que cambia. Al renderizar, guarda una copia y lo compara con el DOM actual para detectar qué ha cambiado y actualizar únicamente esas partes.

React vuelve a renderizar un componente:
- Cuando se actualiza el estado interno.
- Cuando un componente padre se renderiza y propaga sus cambios hacia abajo, los componentes hijos también se renderizan. Aunque el contenido del hijo no cambie ni se actualice en el DOM, en la consola podemos ver que se ha vuelto a renderizar.

### Renderizado de listas
Normalmente trabajaremos con un array de elementos que queremos renderizar como elementos. En estos casos, utilizaremos Java Script para mapear la información de cada usuario. Tenemos que envolverlo entre llaves porque lo que devuelve el mapeo de usuarios es lo que queremos renderizar.

Cada elemento debe tener una <code>key</code> o identificador único para que el virtual DOM pueda identificarlo. Lo ideal sería utilizar el <code>id</code> de una base de datos.













