import React from 'react'

const Profile = props => {
    return (
        <div>
            <h3>PROFILE</h3>
            <p> Hello @ {props.username}</p>
        </div>
    )
}

export default Profile