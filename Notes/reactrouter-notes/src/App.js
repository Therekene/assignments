import React from 'react'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Navbar from './Navbar.js'
import { Switch, Route } from 'react-router-dom'
import './style.css'

// BrowserRouter => Teaches your about how to be SPA
// Switch        => Allows to load a specific component
// Route(s)      => Define the component that should be loaded when a url changes
// Link(s)       => Allows the user to change component view
// withRouter    => A method used to provide the react-router-dom props

// Every component loaded on a <Route /> receives 3 props from react-router-dom:
    // History 
    // Location
    // Match

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
               <Route exact path="/"  component={Home}/>
               <Route path="/about"   component={About}/>
               <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
    )
}

export default App