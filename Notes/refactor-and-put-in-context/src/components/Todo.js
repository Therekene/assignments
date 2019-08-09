import React, { Component } from 'react'
import TodoForm from './TodoForm.js'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            title: props.title,
            description: props.description
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({  [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const todoID = this.props._id

        const updateObj = {
            title: this.state.title,
            description: this.state.description
        }

        this.props.editTodo(todoID, updateObj)

        this.setState({
            title: this.state.title,
            description: this.state.description,
            editToggle: false
        })
    }

    render(){
        return (
            <div style={{border: '1px solid black', height: 150}}>
            { !this.state.editToggle 
                ?
                    <>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <button onClick={() => this.props.deleteTodo(this.props._id)}>Delete</button>
                        <button onClick={this.toggler}>Edit</button>
                    </>
                :
                    <>
                        <TodoForm 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            title={this.state.title}
                            description={this.state.description}
                            btnText="Submit Edit"
                        />
                        <button onClick={this.toggler}>Close Edit</button>
                    </>
            }
            </div>
        )
    }
}

export default Todo