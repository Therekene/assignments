import React, { Component } from 'react'
import Character from './Character.js'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
           name: "",
           weapon: "",
           whatAreYou: "",
           isGood: false,
           characters: []
        }
    }

    handleChange = e => {
        const value = e.target.type === "checkbox" 
                            ? e.target.checked 
                            : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // Capture the user's input, and save them in an Object
        const newLOTRChar = {
            name: this.state.name,
            whatAreYou: this.state.whatAreYou,
            weapon: this.state.weapon,
            isGood: this.state.isGood
        }
        // Update state to save that data and refresh the form
        this.setState(prevState => ({
            name: "",
            weapon: "",
            whatAreYou: "",
            isGood: false,
            // This maintains all previous objects while adding the new object to the end of the list
            characters: [...prevState.characters, newLOTRChar]  
        }))

    }

    render(){
        const mappedCharacters = this.state.characters.map(character => 
                                                <Character 
                                                    key={character.name}
                                                    name={character.name}
                                                    weapon={character.weapon}
                                                    whatAreYou={character.whatAreYou}
                                                    isGood={character.isGood}
                                                />)   
                                                        // You could also just say {...character}
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <input 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/>
                  <input 
                    type="text" 
                    name="weapon" 
                    value={this.state.weapon} 
                    onChange={this.handleChange}/>
                  <input 
                    type="text" 
                    name="whatAreYou" 
                    value={this.state.whatAreYou} 
                    onChange={this.handleChange}/>
                  Is Good?: <input 
                    type="checkbox" 
                    name="isGood" 
                    checked={this.state.isGood}
                    onChange={this.handleChange}/>
                <button>Submit</button>
              </form>
              <div>
                  {mappedCharacters}
              </div>
            </div>
        )
    }
}

export default App