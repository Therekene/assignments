import React from 'react'
import { withTheme } from './context/ThemeProvider.js'

const Main = (props) => {
    console.log(props.changeTheme)
    return(
        <div className = {`main main-${props.theme}`}>
            <h1>This is the Main content</h1>
            <button onClick ={props.changeTheme}>Change Theme</button>
        </div>
    )
}

export default withTheme (Main)