import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilterName, setFilterName] = useState(persons)

  const hook = () => {
      personService.getAll().then(inicialPerson => {
        setPersons(inicialPerson)
        setFilterName(inicialPerson)
      })
  }

  useEffect(hook, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    var addItem = true;
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString(),
    }

    persons.forEach(element => {
      if (element.name === personObject.name)
        addItem = false;
    });

    if(addItem){

      personService.create(personObject).then(newPerson =>{
        setPersons(persons.concat(newPerson))
        setFilterName(newFilterName.concat(newPerson))
      })
      
    }else{
      if(window.confirm(`${personObject.name} added to the phoneboock, replace the old number with a new one?`)){
        const per = persons.find( n => n.name === personObject.name)
        const data = { ...per }
        data.number = personObject.number

        personService.update(per.id, data).then(returnPrson => {
          setPersons(persons.map(n => n.id !== per.id ?  n : returnPrson))
          setFilterName(newFilterName.map(n => n.id !== per.id ? n : returnPrson))
        }) 
      }
    }
    console.log(persons)
    console.log(newFilterName)

    setNewName('')
    setNewNumber('')
    
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    const value = event.target.value;
    const filtered = persons.filter(user => user.name.includes(value));
    setFilterName(filtered);
  }

  const toggledelete = (id) => {
    const person = persons.find(n => n.id === id);
    if(window.confirm(`Delete ${person.name} ?`)){
      personService.deleted(id).then(returnetPerson => {
        hook()
        alert(
          `'${person.name} eliminado : ${returnetPerson} '`
          )
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter change={handleFilter}/>

      <h2>add a new</h2>

      <PersonForm sub={addNewPerson} nameValue={newName} nameChange={handlePersonChange}
                                          numberValue={newNumber} numberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      <ul>
          {newFilterName.map(person => (
            <Person key={person.id} person={person} toggleDelete={() => toggledelete(person.id)}/>
          ))}
      </ul>
    </div>
  )
}

export default App