import React from "react";

const Person = ({person, toggleDelete}) => {
    return <><li>{person.name} - {person.number}</li>
                <button onClick={toggleDelete}>Borrar</button> </>
}

export default Person