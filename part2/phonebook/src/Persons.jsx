import React from 'react'

export const Persons = ({filteredPersons, deletePerson}) => {
    
  return (
    <>
        {filteredPersons.map(person => <p key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id, person.name) }>delete</button></p> )}
        </>
    
  )
}
