import React from 'react'

export const Filter = ({filterName, handleInputChange}) => {
    
  return (
    <div>
        filter shown with <input name='filter' value={filterName} onChange={handleInputChange} />
      </div>
  )
}
