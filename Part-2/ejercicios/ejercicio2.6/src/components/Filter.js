import React from "react";

const Filter = (props) => {
    return(
        <div>
            filter show with <input type="text" onChange={props.change} />
        </div>
    )
}

export default Filter