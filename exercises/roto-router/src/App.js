import React from 'react'
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/services' component={Services} />
            </Switch>
            <Footer />
        </div>
    )
}


export default App