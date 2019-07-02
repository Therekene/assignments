import React from 'react'
import Person from './Person.js'

const NameList = props => {
    const { names } = props

    const mappedNames = names.map((person, i) => 
                            <Person 
                                key={i} 
                                firstName={person.firstName}
                                lastName={person.lastName}/>
                            )
                             
    return (
        <div>
            {mappedNames}
        </div>
    )
}

export default NameList