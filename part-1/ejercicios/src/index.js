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
      <div>
        <table>
          <tbody>
            <tr>
              <th>{good.name}</th>
              <td>{good.value}</td>
            </tr>
          <tr>
            <th>{neutral.name}</th>
            <td>{neutral.value}</td>
          </tr>
          <tr>
            <th>{bad.name}</th>
            <td>{bad.value}</td>
          </tr>
          <tr>
            <th>all</th>
            <td>{(allStatistic*100)/all}%</td>
          </tr>
          <tr>
            <th>positive</th>
            <td>{(good.value*100)/all}%</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return(
    <p>No feedback given</p>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const puntos = new Uint8Array(6);
const copy = { ...puntos }

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  let [visible, setVisible] = useState(false)

  const posicion = anecdotes.indexOf(props.anecdotes[selected])

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
    copy[posicion] += 1
    setGood(good + 1)
  } 

  const hadleNeutral = () => {
    copy[posicion] += 1
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    copy[posicion] += 1
    setBad(bad + 1)
  }

  const handleRandon = () => {
    setSelected(getRandomInt(5))
    setVisible(false)
  }

  const handleVisible = () => {
    visible = true
    setVisible(visible)
  }

  const Content = () => {
    if (visible === true) {
      return (
          <>
          <Title text="give feedback" />
          <Button handleClick={handleGood} text={'good'} /> 
          <Button handleClick={hadleNeutral} text={'neutral'} />
          <Button handleClick={handleBad} text={'bad'} />
          <Title text="statistic" />
          <Statistic good={objectGood} neutral={objectNeutral} bad={objectBad} />
          </>
      )
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {copy[posicion]} votes</p>

      <Button handleClick={handleVisible} text={'vote'}/>
      <Button handleClick={handleRandon} text={'next anecdote'}/>
      <Content />
      <h1>Anecdote whit most votes</h1>
     
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))