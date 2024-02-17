import React, { useState, useEffect } from 'react'
import Note from './components/Notes'
import noteService from './services/notes'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        noteService.getAll().then(inicialNotes => {
            setNotes(inicialNotes)
        })
    }, [])

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: (notes.length + 1).toString(),
        }

        noteService.create(noteObject).then(returneNote => {
            setNotes(notes.concat(returneNote))
            setNewNote('')
        })
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changeNote = { ...note, important: !note.important }
        
        noteService.update(id, changeNote).then(returnedNote => {
            setNotes(notes.map(note =>  note.id !== id ? note : returnedNote))
        })
        .catch(error =>{
            alert(
            `the note '${note.content}' was already deleted from server`
            )
            setNotes(notes.filter(n => n.id !== id))
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