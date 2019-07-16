import React from 'react'
import {withTheme} from './context/ThemeProvider.js'

const Footer = (props) => {
    return (
        <div className = {`footer footer-${props.theme}`}>
            Baddass Footer Here
        </div>
    )
}

export default withTheme (Footer)