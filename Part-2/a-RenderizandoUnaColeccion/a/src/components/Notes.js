import React from "react";

const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? 'make impornt' : 'make not importance'
        
    return (
        <li>
        {note.content}
        <br />
        <button onClick={toggleImportance}>{label}</button>
        </li>
    )    
}

export default Note