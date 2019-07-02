import React, { Component } from 'react'
import { newExpression } from '@babel/types';


class App extends Component {
    constructor() {
        super()
        this.state = {
            fName: "",
            lName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favoriteFood: "",
            about: "",
            array: []
        }
    }

    handleSubmit = e => {
        e.preventdefault()
     const  newPerson = {
        fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            about: this.state.about

    }
        this.setstate (...prevState => ({
            fName: "",
            lName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favoriteFood: "",
            about: "",
            array: [...prevState.array, newPerson]
        }))
    }



    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }



 
    render() {
        const mappedArray = this.state.array.map((info,i) => {}
            return(
                                                    key = {i}
                                                    fName = {info.fName}
                                                    lName = {info.lname}
                                                    birthPlace = {info.birthPlace}
                                                    email = {info.email}
                                                    phone = {info.phone}
                                                    favFood = {info.favFood}
                                                    about = {info.about}
        
        
        )
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                        value={this.state.fName}
                        name= 'fName'
                        type='text'
                        onChange={this.handleChange}
                        placeholder='First Name' />
                    <input 
                        value={this.state.lName}
                        name='lName'
                        type='text'
                        onChange={this.handleChange}
                        placeholder= 'Last Name' />
                    <input 
                        value={this.state.email}
                        name='email'
                        type='text'
                        onChange={this.handleChange}
                        placeholder= 'Email'/>
                    <input 
                        value={this.state.birthPlace}
                        name='birthPlace'
                        type='text'
                        onChange={this.handleChange}
                        placeholder= 'Birthplace'/>
                    <input 
                        value={this.state.phone}
                        name='phone'
                        type='text'
                        onChange={this.handleChange}
                        placeholder= 'Phone'/>
                    <input 
                        value={this.state.favoriteFood}
                        name='favoriteFood'
                        type='text'
                        onChange={this.handleChange}
                        placeholder= 'Favorite Food'/>
                    <textarea 
                        rows = {20}
                        cols = {80}
                        style = {{ resize: 'none'}}
                        value={this.state.about}
                        onChange={this.handleChange}
                        name='about'
                        placeholder= 'Tell us about yo self!'/>
                    <button>Submit</button>
                </form>
                <h1>${mappedArray}</h1>
            </div>
        )
    }
}

export default App