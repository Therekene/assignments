import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <div className='navDiv'>
            
            <div className= 'title-better'><h1>Better</h1> </div>
            <div className="martini-glass"></div>
            <h1 className="title-bartender">Bartender</h1>
            <p className='navTitle'>Search By</p>
            <div className='linkDiv'>
                <Link className="name" to='/'>Name</Link>
                <Link className="ingredient" to='/'>Ingredient</Link>
                <Link className="random-drink" to='/'>Random</Link>
             
            </div>
        </div>
    )
}

export default Navbar