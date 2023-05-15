import React from 'react'
import { Part } from './Part';

export const Content = ({content}) => {
   
    
    const contentParts = content.map((part)=> <Part key={part.id} name={part.name} exercises={part.exercises}/>);

    const totalExercises = content.reduce((sum, part) => sum + part.exercises, 0);
    
  return (
    <>
    {contentParts}
    <b>total of {totalExercises} exercises</b>
    </>
  )
}
