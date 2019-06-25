import React from 'react'
import Pet from './Pet'

const Friend = props => {
    
    const mappedPets = props.pets.map((animal,i) => <Pet
                                            key = {i + animal}
                                            petsName = {animal.name}
                                            petsBreed = {animal.breed}/>)

    
    
    return (
        <div className = 'namebox'>
            <h1>{props.name}</h1>
            <h2>Age: {props.age}</h2>
                {mappedPets}
        </div>
    )



}

export default Friend