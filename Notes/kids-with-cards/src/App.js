import React from 'react'
import Kid from './Kid.js'

const App = props => {

    const kidsWithCards = [
        { name: "stevie",  cards: ["diglett", "squirtle", "charmander"]},
        { name: "joey",    cards: ["diglett", "pikachu", "charmander"]},
        { name: "mo",      cards: ["dugtrio", "polygon", "articuno", "charizard", "moltress"]}
    ]

    const mappedKids = kidsWithCards.map((kid, i) => 
                        <Kid 
                            key={i + kid.name} 
                            name={kid.name} 
                            cards={kid.cards}/>)

    return (
        <div>
            { mappedKids }
        </div>
    )
}

export default App