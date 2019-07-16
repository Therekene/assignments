import React from 'react'
import { withTheme } from './context/ThemeProvider.js'

const App = (props) => {
    return (
        <div className={`app app-${props.theme}`}>
            <button onClick={props.changeTheme}>Change Theme</button>
            
            <header className={`header header-${props.theme}`}>
                My HEADER
            </header>

            <main>
                THE MAIN SECTION
            </main>

            <footer>
                I AM A FOOTER
            </footer>

        </div>
    )
}

export default withTheme(App)