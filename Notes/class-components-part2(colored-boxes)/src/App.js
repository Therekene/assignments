import React, { Component } from 'react'
import Box from './Box.js'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            box1Color: "black",
            box2Color: "black",
            box3Color: "black",
            box4Color: "black"
        }
    }

    blackAndWhite = () => { 
        let newColor
        if(this.state.box1Color === "black"){
            newColor = "white"
        } else {
            newColor = "black"
        }

        this.setState({
            box1Color: newColor,
            box2Color: newColor,
            box3Color: newColor,
            box4Color: newColor
        })
    }

    render(){
        return (
            <div>
                <Box color={this.state.box1Color}/>
                <Box color={this.state.box2Color}/>
                <Box color={this.state.box3Color}/>
                <Box color={this.state.box4Color}/>
                <button onClick={this.blackAndWhite}>Black & White</button>
            </div>
        )
    }
}

export default App