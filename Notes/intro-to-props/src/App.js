import React from 'react'
import Box from './Box.js'
import './style.css'

function App(props){ 
    return (
        <div>
            <Box classyBox="box1" name="Rick"/>
            <Box classyBox="box2" name="Morty"/>
            <Box classyBox="box3" name="Scabbers"/>
        </div>
    )
}

export default App