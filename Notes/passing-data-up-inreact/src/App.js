import React, { Component } from 'react'
import Person from './Person.js'

class App extends Component {
  
    sayHiMethod = (phrase) => {
        alert(phrase)
    }

    render(){
        return(
            <div>
                <Person 
                    phrase="Hello" 
                    sayHiMethod={this.sayHiMethod}/>
                <Person 
                    phrase="Bon Jour" 
                    sayHiMethod={this.sayHiMethod}/>
                <Person 
                    phrase="Hola" 
                    sayHiMethod={this.sayHiMethod}/>
            </div>
        )
    }
}

export default App