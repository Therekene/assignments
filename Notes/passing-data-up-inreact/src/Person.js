import React from 'react'

const Person = (props) => {
    return (
        <div>
            <button onClick={() => props.sayHiMethod(props.phrase)}>Say {props.phrase}</button>
        </div>
    )
}

export default Person