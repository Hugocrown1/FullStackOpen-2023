import React from 'react'
import { Part } from './Part'

export const Content = ({parts}) => {

  const partComponents = parts.map(({ exercises, name }) => (
    <Part key={exercises} content={{ exercises, name }} />
  ));
  return (
    <div>
    {partComponents}
    </div>
  )
}
