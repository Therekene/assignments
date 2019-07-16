import React, { Component } from 'react'
import { withTodos } from './context/TodoProvider.js'


class App extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            description: ""
        }
    }

    componentDidMount(){
       this.props.getTodos()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const newTodo = {
            title: this.state.title,
            description: this.state.description
        }

        this.props.addTodo(newTodo)
    }


    
    render(){
        const mappedTodos = this.props.todos.map(todo => {
            return (
                <div key={todo._id} style={{border: '1px solid black'}}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <button onClick={() => this.props.deleteTodo(todo._id)}>Delete</button>
                </div>
            )
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        value={this.state.title} 
                        onChange={this.handleChange} 
                        placeholder="Title"/>
                    <input 
                        type="text" 
                        name="description" 
                        value={this.state.description} 
                        onChange={this.handleChange} 
                        placeholder="Description"/>
                    <button>Add Todo</button>
                </form>
                <div>
                    { mappedTodos }
                </div>
            </div>
        )
    }
}

export default withTodos(App)