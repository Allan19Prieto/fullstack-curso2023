import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  // Funcion auxiliar
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return(
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born in {bornYear}</p>
    </>
  )
}

const App = () => {

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
}

ReactDOM.render(<App />, document.getElementById('root'))
