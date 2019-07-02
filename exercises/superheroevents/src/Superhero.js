import React from 'react'

const Superhero = props => {
    
    
    return (
        <div id = 'herodiv'>
            <h1>{props.name}</h1>
            <h2>{props.show}</h2>
            <button  style={{backgroundImage: `url(${props.imageName})`}} onClick={() => props.shout(props.catchPhrase)}></button>
        </div>
    )
}

export default Superhero