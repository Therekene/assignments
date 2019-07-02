import React from 'react'

const Controls = props => {
    return (
        <div>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.multiply}>Multiply by 2</button>
        </div>
    )
}

export default Controls