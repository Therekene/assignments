import React from 'react'

const Home = (props) => {
    const { on, toggler } = props
    return (
        <div style={{backgroundColor: on ? "cornflowerblue" : "firebrick"}}>
            <h1>The toggle is {on ? "On" : "Off" }</h1>
            <button onClick={toggler}>Toggle</button>
        </div>
    )
}

export default Home