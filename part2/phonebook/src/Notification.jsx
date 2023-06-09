import React from 'react'
import './index.css'

export const Notification = ({message}) => {
    if (message === null){
        return null
    }

  return (
    <div className='notification'>{message}</div>
  )
}
