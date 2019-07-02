import React, { Component } from 'react'
import Box from './Box.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            box1Color: 'white',
            box2Color: 'white',
            box3Color: 'white',
            box4Color: 'white',
            boxShape: '50px',
            boxClass: 'standard',
        }
        this.intervalId = null
    }
    blackWhite = () => {
        this.setState({
            box1Color: this.state.box1Color === 'white' ? 'black' : 'white',
            box2Color: this.state.box1Color === 'white' ? 'black' : 'white',
            box3Color: this.state.box1Color === 'white' ? 'black' : 'white',
            box4Color: this.state.box1Color === 'white' ? 'black' : 'white'
        })

    }

    purpbtn = () => {
        this.setState({
            box1Color: this.state.box1Color === 'purple' ? 'white' : 'purple',
            box2Color: this.state.box2Color === 'purple' ? 'white' : 'purple'
        })

    }

    btn3 = () => {
        this.setState({
            box3Color: this.state.box3Color === 'blue' ? 'white' : 'blue'
        })
    }
    btn4 = () => {
        this.setState({
            box4Color: this.state.box4Color === 'blue' ? 'white' : 'blue'
        })
    }
    circlebtn = () => {
        this.setState({
            boxShape: this.state.boxShape === '50px' ? '500px' : '50px'
        })
    }
    invisible = () => {
        this.setState({
            boxClass: this.state.boxClass === 'standard' ? 'houdini' : 'standard'
        })
    }
    trippy = () => {
        this.setState({
            boxClass: this.state.boxClass === 'standard' ? 'trippy' : 'standard'
        })
    }
    hypnosis = () => {
        
        if(this.intervalId){
            clearInterval(this.intervalId)
            this.intervalId = null
        } 
        this.intervalId = setInterval(this.changePhase, 500)
        
        
        console.log (this.state.boxClass)
    }

    changePhase = () => {
        
        if (this.state.boxClass === 'standard') {
                this.setState({ boxclass: this.state.boxClass = 'phase1' })
            } else if (this.state.boxClass === 'phase1') {
                this.setState({ boxclass: this.state.boxClass = 'phase2' })
            } else if (this.state.boxClass === 'phase2') {
                this.setState({ boxclass: this.state.boxClass = 'phase3' })
            } else {
                this.setState({ boxClass: this.state.boxClass = 'standard' })
            }
    }

    render() {
        return (
            <div>
                <h1 className='title'>DJ React Box</h1>
                <div className='boxContainer'>
                    <Box color={this.state.box1Color} style={this.state.boxShape} className={this.state.boxClass} />
                    <Box color={this.state.box2Color} style={this.state.boxShape} className={this.state.boxClass} />
                    <Box color={this.state.box3Color} style={this.state.boxShape} className={this.state.boxClass} />
                    <Box color={this.state.box4Color} style={this.state.boxShape} className={this.state.boxClass} />
                </div>
                <div className='btndiv'>
                    <button onClick={this.blackWhite}>Black and white</button>
                    <button onClick={this.purpbtn}>Purple</button>
                    <button onClick={this.btn3}>Box 3</button>
                    <button onClick={this.btn4}>Box 4</button>
                    <button onClick={this.circlebtn}>Circles</button>
                    <button onClick={this.invisible}>Invisibility</button>
                    <button onClick={this.trippy}>Trippy</button>
                    <button onClick={this.hypnosis}>Hypnosis</button>
                </div>
            </div>
        )
    }
}



export default App