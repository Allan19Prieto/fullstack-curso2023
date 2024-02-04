import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilterName, setFilterName] = useState(persons)

  const addNewPerson = (event) => {
    event.preventDefault()
    var addItem = true;
    const personObject = {
      name: newName,
      number: newNumber,
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

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter show with <input type="text" onChange={handleFilter} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName}
                       onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber}
                       onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {newFilterName.map(person => (
            <Person key={person.id} person={person}/>
          ))}
      </ul>
    </div>
  )
}

export default App