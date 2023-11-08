import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Content = (props) => {
  return(
    <>
      <Part name={props.parts[0].name} excer={props.parts[0].exercises} />
      <Part name={props.parts[1].name} excer={props.parts[1].exercises} />
      <Part name={props.parts[2].name} excer={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.excer}</p>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App/>
)