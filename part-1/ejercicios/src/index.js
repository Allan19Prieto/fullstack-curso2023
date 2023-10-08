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

function Statistic({good, neutral, bad}) {
  const all = (good.value + neutral.value + bad.value)
  const allStatistic = (good.value * 1 + neutral.value * 0 + bad.value * -1)
  if (all !== 0){
    return(
      <>
        <p>{good.name} {good.value}</p>
        <p>{neutral.name} {neutral.value}</p>
        <p>{bad.name} {bad.value}</p>
        <p>all {all}</p>
        <p>avarage {(allStatistic*100)/all}%</p>
        <p>positive {(good.value*100)/all}</p>
      </>
    )
  }
  return(
    <p>No feedback given</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const objectGood = {
    name: 'good',
    value: good
  } 

  const objectNeutral = {
    name: 'neutral',
    value: neutral
  }

  const objectBad = {
    name: 'bad',
    value: bad
  }

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
      <Statistic good={objectGood} neutral={objectNeutral} bad={objectBad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))