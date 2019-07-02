import React from 'react'

const Person = props => {
    return (
        <div>
            <h3>{props.firstName} {props.lastName}</h3>
        </div>
    )
}

export default Person