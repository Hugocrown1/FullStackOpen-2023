import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Content } from './Content'
import { Totales } from './Totales'



function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Totales parts={course.parts}/>
    </div>
  )
}

export default App
