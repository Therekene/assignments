import React from 'react'

const NameForm = (props) => {
    const { handleSubmit, handleChange, inputs: { fName, lName } } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="fName" 
                value={fName} 
                onChange={handleChange} 
                placeholder="First Name"/>
            <input 
                type="text" 
                name="lName" 
                value={lName} 
                onChange={handleChange} 
                placeholder="Last Name"/>
            <button>Submit</button>
        </form>
    )
}

export default NameForm