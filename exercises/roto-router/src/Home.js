import React from 'react'

const Home = props => {
    return (
        <div className='homediv'>
            <h1 className='title' >Bob's Aquarium</h1>
            <div className= 'homeinner'>
                <h2>Bob's World Class Aquarium</h2>
                <img className='aquarium' src = 'https://images.unsplash.com/photo-1459207982041-089ff95be891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'></img>
                <p>Bob's Aquarium located in somewhere, Utah, is home to more than 4,000 animals from around the world. Conveniently located off Interstate 15 at exit 291 and just minutes from downtown Salt Lake City, this world-class Aquarium features a 300,000-gallon shark exhibit with a 40-foot tunnel that guests can walk through and enjoy an underwater view of sharks, stingrays, sea turtles, and more. During your visit, explore five different animal habitats – from the rainforests of South America and Asia to the world’s Oceans, Deep Sea, and even the Antarctic – and come face-to-face with playful penguins, Clouded leopards, adorable otters, sloths, and a variety of animals from sea to the sky.</p>
                <h3>TICKETS</h3>
                <p>Adults: $19.95
                    Teens, Military, Students and Seniors: $16.95
                    Child: $14.95
                    CHILDREN 2 AND UNDER ARE FREE</p>
            </div>
        </div>
    )
}

export default Home