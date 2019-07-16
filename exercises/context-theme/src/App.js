import React from 'react'
import Navbar from './Navbar.js'
import Main from './Main.js'
import Footer from './Footer.js'
import {withTheme} from './context/ThemeProvider.js'

const App = (props) => {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )

}



export default withTheme(App)