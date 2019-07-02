import React from 'react'

const Home = (props) => {
    console.log(props)
    return (
        <div className="home">
                Home
            <button onClick={() => props.history.push("/contact")}>Go to Contact</button>
        </div>
    )
}

export default Home