import React from "react";

const Header = (props) => {
    return <h1>{props.name}</h1>
}
  
  const Content = ({ part }) => {
    return(
      <>
        <Part name={part.name} exercises={part.exercises} />
      </>
    )
  }

  const Part = (props) => {
    return (
      <>
        <p>{props.name} {props.exercises}</p>
      </>
    )
  }

const Course = ({ course, parts }) => {

    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return(
        <div>
            <Header name={course.name} />
            {parts.map( part => (
                <Content key={part.id} part={part} />
            ))}
            <h3>Total of {total} exercises</h3>
        </div>
    )
}

export default Course