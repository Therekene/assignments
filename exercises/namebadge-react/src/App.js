import React, { Component } from 'react'
import Forms from './Forms.js'

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
            about: this.state.about,
            
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

        //.map has to be done in render (workspace)
 
        const mappedNewPeople = this.state.array.map((info, i) => {
            return (
                <div className="container">
                     <div className="mapDiv" key={i}>
                         <h1>Name: {info.fName} {info.lName}</h1>
 
 
                            <p>Email: {info.email}</p>
                            <p>Phone number: {info.phone}</p>
                            <p>Favorite food: {info.favFood}</p>
                            <p>About: {info.about}</p>
                    </div>
                </div>
            )
 
        })
 
 
        return (
            <div className="appDiv">
 
                <Forms
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
 
                />
 
 
 
                <div>{mappedNewPeople}</div>
 
            </div>
 
        )
 
    }
 }

export default App