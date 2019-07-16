import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <div className='navDiv'>
            <h1 className= 'title'>Better Bartender</h1>
            <p className='navTitle'>Search By</p>
            <div className='linkDiv'>
                <Link to='/'>Name</Link>
                <Link to='/Ingredient'>Ingredient</Link>
                <Link to='/random'>Random Drink</Link>
            </div>
        </div>
    )
}

export default Navbar