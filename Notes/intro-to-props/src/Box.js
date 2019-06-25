import React from 'react'

function Box(props){
    return (
        <div className={`${props.classyBox}`}>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Box