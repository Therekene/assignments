import React from 'react'
import Home from './Home.js'
import Navbar from './Navbar.js'
import Random from './Random.js'
import { Switch, Route } from 'react-router-dom'
import Ingredients from './Ingredient.js'
import Recipe from './Recipe.js'

const App = () => {


        return (
            <div className='pageDiv'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/random' component={Random} />
                    <Route path='/ingredient' component={Ingredients} />
                    <Route path="/recipe/:id" component={Recipe}/>
                </Switch>
            </div>
        )
    
}

export default App