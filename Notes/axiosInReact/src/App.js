import React, { Component } from "react"
import axios from 'axios'


class App extends Component {
    constructor(){
        super()
        this.state = {
            characters: [] // Initial state for what we are getting from the API.
        }
    }

    componentDidMount = () => {
        // Get the data when the page loads
        // Uncomment lines 16 - 23 to test this request.
        // axios.get("https://rickandmortyapi.com/api/character")
        //     .then(res => {
        //         // Save the data in the .then() to state so you can map it to the page
        //         this.setState({
        //             characters: res.data.results
        //         })
        //     })
        //     .catch(err => console.log(err))
    }

    render(){
        // Map out the data recieved from the API and save it in a variable 
            // This would be turned into it's own component where you map out <Character />'s
        const mappedCharacters = this.state.characters.map(character => {
            return (
                <div 
                    style={{backgroundImage: `url(${character.image})`, height: 200, backgroundSize: "cover", backgroundPosition: "center"}}
                    key={character.id}>
                    <p>{character.name}</p>
                </div>
            )
        })

        return (
            <div>
                
                {/* 
                    Display the mapped data to display the characters 
                */}

                { mappedCharacters }
            </div>
        )
    }
}

export default App