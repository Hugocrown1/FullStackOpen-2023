import { useState, useEffect } from 'react'
import { Filter } from './Filter'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { Notification } from './Notification'
import {Error} from './Error'
import personService from './services/persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  //const [personsList, setPersonsList] = useState(persons)

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()));
  const existsPerson = persons.some(person => person.name === newName);
  const findPersonIdByName = (name) => {

    const person = persons.find(person => person.name === name)
    if(person){
      return person.id;
    }

    return null
  
  
  }

  const deletePerson = (id, personName) => {
    if(window.confirm(`Delete ${personName}?`))
    personService.eliminate(id).then(response => {
      const updatedPersons = persons.filter(person => person.id !== id)
      setPersons(updatedPersons)
    }
      
      ).catch(error => {
        console.error(error)
      })
  }

  const updatePerson = (id, personObject) => {
    personService.update(id, personObject).then(response =>{
      setPersons(persons.map(person => person.id !== id? person : response.data))
    }).catch(error =>{
      setErrorMessage(`Information of ${personObject.name} has already been removed form server`)
      setPersons(persons.filter(n => n.id !== id))
      
    })
  }

  useEffect(() => {
    personService.getAll().then(response => {
      
      setPersons(response.data)
    })
  },[])


  const handleInputChange = (e) => {
   
    const { name, value } = e.target;

    if (name === 'name') {
      setNewName(value);
    } else if (name === 'number') {
      setNewNumber(value);
    } else if (name === 'filter'){
      setFilterName(value)
    }
  };
 

  
 const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if(existsPerson){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        let id = findPersonIdByName(newName)
        
        updatePerson(id, personObject)
        setNewName('')
        setNewNumber('')
        
      }

    } else {
      
       
  
    personService.create(personObject).then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')

      setNotificationMessage(`Added ${personObject.name}`
      )
      setTimeout(() => {setNotificationMessage(null)}, 5000)

    })
    }
  
    
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Error message={errorMessage}/>
       <Notification message={notificationMessage}/>
      <Filter filterName={filterName} handleInputChange={handleInputChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleInputChange={handleInputChange}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App