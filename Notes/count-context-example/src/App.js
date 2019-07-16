import React, { Component } from 'react'
import { withCount } from './context/CountProvider.js'


const App = props => {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.increment}>Increment</button>
        </div>
    )
}

export default withCount(App)