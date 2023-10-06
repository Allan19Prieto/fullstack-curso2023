// import React from 'react';
// Componentes con estado
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// ** Función auxiliar y Desestructuración
 
/*const Hello = ({name, age}) => {
  // Desestruccturar para optimizar, y nos ayuda a reunir los valores de un objeto en variables
  // separadas..
  // const name = props.name
  // const age = props.age
  //const {name, age} = props

  // Funcion auxiliar -- Definir una funció dentro de otra en Java Scripts es muy comun
  const bornYear = () => new Date().getFullYear() - age

  return(
    <>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  )
}*/

/*const App = () => {

  const name = 'Peter'
  const age = 10

  return(
    <>
    <h1>Greetings</h1>
    <Hello name="Allan" age={24}/>
    <Hello name="Jimena" age={20}/>
    <Hello name={name} age={age}/>
  </>
  )
}*/

// ** Re-renderizado de la página
/*
const AppCounter = (props) => {
  const {counter} = props
  return(
    <div>{counter}</div>
  )
}

let counter = 1

// ReactDOM.render(<App />, document.getElementById('root'))
const refresh = () => {
  ReactDOM.render(<AppCounter counter={counter} />, document.getElementById('root'))
}*/

// Hace llamadas a la funcion que renderiza, para mostrar la suma cada cierto tiempo
// Sin embargo no es la forma recomendada de renderizar este objeto
/*
setInterval(() => {
  refresh()
  counter += 1
}, 1000) */

// ** Componente con estado

// Componente para mostrar en pantalla
/*const Display = ({ counter }) => <div>{counter}</div>

// Componente para los botones
const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
  // sintaxis de asignación de desestructuración
  const [ counter, setCounter ] = useState(0)

  // Separamos controladores de eventos en funciones
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  // Usaremos eventos para mostrar y aumentar el Contador
  return (
    <>
    <Display counter={counter} />
    
    <Button handleClick={increaseByOne}
            text='plus' />
    <Button handleClick={setToZero}
            text='minus' />
    </>
  )
}*/

// Uns estado más complejo
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})

  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})


  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

