import React from 'react'

const NameForm = props => {
    const {handleSubmit, handleChange, firstName, lastName} = props

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"/>
            <input 
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <button>Submit</button>
        </form>
    )
}

export default NameForm