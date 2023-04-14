import { useState } from 'react'


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const randomAnecdote = () => {
    let randomNumber =  Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
   
  }
  
  const addPoints = () =>{
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  const mostVotedAnecdote = () => anecdotes[points.indexOf(Math.max(...points))]
 
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {points[selected]} points
      <br/>
      <button onClick={() => addPoints()}>vote</button>
      <button onClick={() => randomAnecdote()}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {mostVotedAnecdote()}
    </div>
  )
}



export default App
