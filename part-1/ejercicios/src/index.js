import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <p>{props.parte} {props.numero}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content parte={part1} numero={exercises1} />
      <Content parte={part2} numero={exercises2} />
      <Content parte={part3} numero={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))