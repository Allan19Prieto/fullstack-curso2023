import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Button = (props) => (
    <button onClick={props.handleClick} >
      {props.text}
    </button>
)

const Statistic = (props) => {
  return(
    <p>{props.name} { props.num}</p>
  )
}

const All = ({data}) => {
  return(
    <p>all {data}</p>
  )
}

const Porcentage = (props) => {
  if (props.data !== 0) {
    const porcentage = (props.data*100)/props.all
    return (
      
        <p>{props.name} {porcentage} %</p>
    )
  }
  return (
        <p>{props.name} {0} %</p>
  )
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
  } 

  const hadleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={handleGood} text={'good'} /> 
      <Button handleClick={hadleNeutral} text={'neutral'} />
      <Button handleClick={handleBad} text={'bad'} />
      <Title text="statistic" />
      <Statistic name={'good'} num={good} />
      <Statistic name={'neutral'} num={neutral} />
      <Statistic name={'bad'} num={bad} />
      <All data={good+neutral+bad} />
      <Porcentage name={'avarage'} data={(good*1)+(neutral*0)+(bad*-1)} all={good+neutral+bad} />
      <Porcentage name={'positive'} data={good} all={good+neutral+bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))