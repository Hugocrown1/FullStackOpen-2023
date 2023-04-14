import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Statistics } from './Statistics'

const Button = ({text, handleClick}) => {
  return(
    <button onClick={() => handleClick()}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)


  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={addGood}/>
      <Button text='neutral' handleClick={addNeutral}/>
      <Button text='bad' handleClick={addBad}/>
      
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      

    </div>
  )
}

export default App
