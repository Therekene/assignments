import React from 'react'
import {withTheme} from './context/ThemeProvider.js'

const Navbar = (props) => {
    return (
        <div className = {`navbar navbar-${props.theme}`}>
            <a href='home'>Home</a>
            <a href='about'>About</a>
            <a href='contact'>Contact</a>
        </div>
    )
}

export default withTheme (Navbar)