import React from 'react'
import './index.css'

export const Error = ({message}) => {
    if (message === null){
        return null
    }

  return (
    <div className='error'>{message}</div>
  )
}