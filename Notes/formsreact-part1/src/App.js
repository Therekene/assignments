import React, { Component } from 'react'
import NameForm from './NameForm.js'
import NameList from './NameList.js'

// Controlled Components - a component where state keeps current with
// any user input.


// Building A Form
    // 1. <form> with <input> and a <button>
    // 2. Every input needs 3 attributes ( name, value, onChange )
    // 3. You must have a handleChange type method that updates state on user input
    // 4. You must have a handleSubmit type method that fires on the form submission

        // const myVar = "lastName"
        // These two lines are doing the same thing
            // console.log(this.state.lastName)
            // console.log(this.state[myVar])

class App extends Component {
    constructor(){
        super()
        this.state = {
           firstName: "",
           lastName: "",
           names: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // handle the user's data
        const newName = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        // update state, save the user's data && clear the input
        this.setState(prevState => ({
                firstName: "",
                lastName: "",
                names: [...prevState.names, newName]
            }))
    }


    render(){
        return (
            <div>
                <NameForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
                <NameList names={this.state.names}/>
            </div>
        )
    }
}


export default App