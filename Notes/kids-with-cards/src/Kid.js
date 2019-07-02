import React from 'react'
import Card from './Card.js'

const Kid = props => {
    const mappedCards = props.cards.map((card, i) => <Card key={i + card} card={card}/>)

    return (
        <div style={{border: '1px solid black', margin: 5}}>
            <h1>{props.name}</h1>
            <h3>Here are my Bestest cards:</h3>
            {mappedCards}
        </div>
    )
}

export default Kid