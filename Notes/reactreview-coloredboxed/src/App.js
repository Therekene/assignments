import React, { Component } from 'react'
import Box from './Box.js'
import Controls from './Controls.js'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            box1Color: "blackBoxes",
            box2Color: "blackBoxes",
            box3Color: "blackBoxes",
            box4Color: "blackBoxes",
        }
    }

    blackAndWhite = () => {
        const {box1Color, box2Color, box3Color, box4Color} = this.state
        this.setState({
            box1Color: box1Color === "blackBoxes" ? "whiteBoxes" : "blackBoxes",
            box2Color: box2Color === "blackBoxes" ? "whiteBoxes" : "blackBoxes",
            box3Color: box3Color === "blackBoxes" ? "whiteBoxes" : "blackBoxes",
            box4Color: box4Color === "blackBoxes" ? "whiteBoxes" : "blackBoxes",
        })
    }

    top2Purple = () => {
        this.setState({
            box1Color: "purpleBoxes",
            box2Color: "purpleBoxes"
        })
    }

    stretchTheBoxes = () => {
        this.setState({
            box3Color: "stretchTheBox", 
            box4Color: "stretchTheBox"
        })
    }

    
    render(){
        const {
            state: {
                box1Color, 
                box2Color, 
                box3Color, 
                box4Color
            },  blackAndWhite, top2Purple, stretchTheBoxes } = this

        return (
            <div>
                <Box boxClass={box1Color}/>
                <Box boxClass={box2Color}/>
                <Box boxClass={box3Color}/>
                <Box boxClass={box4Color}/>
                <Controls 
                    blackAndWhite={blackAndWhite}
                    top2Purple={top2Purple}
                    stretchTheBoxes={stretchTheBoxes}/>
            </div>
        )
    }
}

export default App