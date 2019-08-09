import React from 'react'
import { Link } from 'react-router-dom'
import { withUser } from '../../context/UserProvider.js'

const Navbar = (props) => {
    const { token , logout } = props
    return (
        <div>
            <Link id="welcome" className="menu-item" to="/welcome"> Welcome </Link>
            <Link id="art" className="menu-item" to="/art"> Art </Link>
            <Link id="prep" className="menu-item" to="/prep"> Preparation </Link>
            {token && <button onClick = {logout} >Logout?</button>}
        </div>
    )
}

export default withUser(Navbar)