import React from 'react'

const Pet = props => {

    return (
        <div>
            <h3>Pet name: {props.petsName}</h3>
            <p>{props.petsBreed}</p>
        </div>
    )
}


export default Pet