import React from "react";

const Person = ({person}) => {
    console.log(person.content)
    return <div>{person.name}</div>
}

export default Person