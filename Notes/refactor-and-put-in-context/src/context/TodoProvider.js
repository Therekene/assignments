import React, { Component } from 'react'
import axios from 'axios'

const TodoContext = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }

    getTodos = () => {
        axios.get("https://api.vschool.io/nateje/todo")
        .then(res => {
            this.setState({
                todos: res.data
            })
        })
        .catch(err => console.log(err))
    }

    addTodo = (newTodo) => {
        axios.post("https://api.vschool.io/nateje/todo", newTodo)
            .then(res => {
                const savedTodoFromDB = res.data
                this.setState(prevState => ({
                    todos: [...prevState.todos, savedTodoFromDB]
                }))
            })
            .catch(err => console.log(err))
    }

    deleteTodo = (todoID) => {
        axios.delete(`https://api.vschool.io/nateje/todo/${todoID}`)
            .then(res => {
                alert(res.data.msg)
                this.setState(prevState => ({
                    todos: prevState.todos.filter(todo => todo._id !== todoID)
                }))
            })  
            .catch(err => console.log(err))
    }

    editTodo = (todoID, updateObj) => {
        axios.put(`https://api.vschool.io/nateje/todo/${todoID}`, updateObj)
            .then(res => {
                this.setState(prevState => ({
                    todos: prevState.todos.map(todo => todo._id === todoID ? res.data : todo)
                }))
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <TodoContext.Provider
                value={{
                    todos: this.state.todos,
                    getTodos: this.getTodos,
                    addTodo: this.addTodo,
                    deleteTodo: this.deleteTodo,
                    editTodo: this.editTodo
                }}>
                { this.props.children }
            </TodoContext.Provider>
        )
    }
}

export default TodoProvider


export const withTodos = C => props => (
    <TodoContext.Consumer>
        { (value) => <C {...value} {...props}/> }
    </TodoContext.Consumer>
)
