import React from 'react'

const Person = (props) => {
    
    return (
        <div style={{ backgroundColor: props.favColor}} className="person-box">
            <p>{props.name}</p>
            <p>My favorite color is {props.favColor}</p>
            <button>Delete</button>
        </div>
    )
}

export default Person