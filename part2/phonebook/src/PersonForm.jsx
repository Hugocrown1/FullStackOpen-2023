import React from 'react'

export const PersonForm = ({ addPerson, newName, newNumber, handleInputChange}) => {
  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input name='name' value={newName} onChange={handleInputChange} />
          <br />
          number: <input name="number" value={newNumber} onChange={handleInputChange} />
       
        </div>
        <div>
          <button type="submit">add</button>
          
          
        </div>
        
      </form>
  )
}
