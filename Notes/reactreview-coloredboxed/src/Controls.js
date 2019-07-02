import React from 'react'

const Controls = props => {
    return (
        <div>
            <button onClick={props.blackAndWhite}>Black and White</button>
            <button onClick={props.top2Purple}>Top 2 Purple</button>
            <button onClick={props.stretchTheBoxes}>Stretch</button>
        </div>
    )
}

export default Controls