import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isMuggle: false,
            city: "",
            gender: "",
            description: "",
            array: []
        }
    }

    // e === event
    handleChange = e => {
        //  We have to see if the event.target was a checkbox.   If it is, we want to store
        // its .checked property.  If it is any other type of input, we want to 
        // store its .value property

        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        // This is doing the same thing as our ternary
            // let value
            // if(e.target.type === "checkbox"){
            //     value = e.target.checked
            // } else {
            //     value = e.target.value
            // }

        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // Store all of the data the user entered in an object
        const newPerson = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isMuggle: this.state.isMuggle,
            city: this.state.city,
            gender: this.state.gender,
            description: this.state.description
        }

        // Save the new object along with the existing objects in the array in state.
        // Clear/reset all inputs back to a default state
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            isMuggle: false,
            city: "",
            gender: "",
            array: [...prevState.array, newPerson]
        }))
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange}/>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName} 
                        onChange={this.handleChange}/>
                    <input 
                        type="checkbox"
                        name="isMuggle"
                        checked={this.state.isMuggle}
                        onChange={this.handleChange}
                    />
                    <select name="city" onChange={this.handleChange}>
                        <option value="none"> - Select a City - </option>
                        <option value="New York">New York</option>
                        <option value="Paris">Paris</option>
                        <option value="North Dakota">North Dakota</option>
                    </select>
                    Wizard:  
                        <input 
                            type="radio" 
                            name="gender" 
                            value="Wizard" 
                            onChange={this.handleChange}/>
                    Witch:  
                        <input 
                            type="radio" 
                            name="gender" 
                            value="Witch" 
                            onChange={this.handleChange}/>
                    <textarea
                        rows={10}
                        cols={40}
                        style={{resize: "none"}}
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App