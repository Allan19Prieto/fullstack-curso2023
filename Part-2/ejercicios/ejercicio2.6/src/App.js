import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    var addItem = true;
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }

    persons.forEach(element => {
      if (element.name === personObject.name)
        addItem = false;
    });

    if(addItem){
      setPersons(persons.concat(personObject))
      
    }else{
      alert(`${personObject.name} Ya es un nombre de la lista`); 
    }

    setNewName('')
    
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName}
                       onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map(person => (
            <Person key={person.id} person={person}/>
          ))}
      </ul>
    </div>
  )
}

export default App