import React from 'react'

const Spots = (props)=>{
    return (
        <div className = "spotdiv">
            <h2>{props.place}</h2>
            <p>Price: {props.price}</p>
            <p>Best season to visit: {props.timeToGo}</p>

        </div>


    )

}

export default Spots