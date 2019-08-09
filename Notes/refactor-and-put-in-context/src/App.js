import React, { Component } from 'react'
import { withTodos } from './context/TodoProvider.js'
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'

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

        this.setState({
            title: "",
            description: ""
        })
    }

    render(){
        return (
            <div>
                <TodoForm 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    btnText="Add Todo"
                    {...this.state}
                />
                <TodoList 
                    todos={this.props.todos}
                    deleteTodo={this.props.deleteTodo}
                    editTodo={this.props.editTodo}
                />
            </div>
        )
    }
}

export default withTodos(App)