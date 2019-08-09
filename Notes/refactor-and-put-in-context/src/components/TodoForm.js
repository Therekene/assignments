import React from 'react'

const TodoForm = (props) => {
    const {handleSubmit, handleChange, title, description, btnText} = props

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={handleChange} 
                placeholder="Title"/>
            <input 
                type="text" 
                name="description" 
                value={description} 
                onChange={handleChange} 
                placeholder="Description"/>
            <button>{btnText}</button>
        </form>
    )
}

export default TodoForm