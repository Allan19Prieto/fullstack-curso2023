import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Notes'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:3001/notes').then(response => {
            setNotes(response.data)
        })
    }, [])

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }

        axios.post('http://localhost:3001/notes', noteObject).then(response => {
            setNotes(notes.concat(noteObject))
            setNewNote('')
        })
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const toggleImportanceOf = (id) => {
        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(n => n.id === id)
        const changeNote = { ...note, important: !note.important }
        
        axios.put(url, changeNote).then(response => {
            setNotes(notes.map(note =>  note.id !== id ? note : response.data ))
        })
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map( note => (
                    <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
                ))}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App