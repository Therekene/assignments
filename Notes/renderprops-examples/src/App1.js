import React from 'react'
import Toggle from './shared/Toggle.js'
import Home from './Home.js'

const App = (props) => {
    return (
        <Toggle render={({on, toggler}) => 

            <div style={{backgroundColor: on ? "cornflowerblue" : "firebrick"}}>
                <h1>The toggle is {on ? "On" : "Off" }</h1>
                <button onClick={toggler}>Toggle</button>
            </div>

        }/> 
    )
}

export default App



{/* <Toggle render={toggleProps => <Home {...toggleProps}/>}/>
        */}