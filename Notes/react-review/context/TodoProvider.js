import React, { Component } from 'react'

const TodoContext = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }

    addTodo = newTodo => {
        this.setState(prevState => ({ todos: [...prevState.todos, newTodo] }))
    }

    render(){
        return (
            <TodoContext.Provider
                value={{
                    todos: this.state.todos,
                    addTodo: this.addTodo
                }}>
              { this.props.children }
            </TodoContext.Provider>
        )
    }
}

export default TodoProvider


export const withTodos = function(C){
    return function(props){
        return (
            <TodoContext.Consumer>
                { value =>  <C {...value} {...props}/>}
            </TodoContext.Consumer>
        )
    }
}

// const withTodos = withTodos = C => props => (
//     <TodoContext.Consumer>
//     { value =>  <C {...value} {...props}/>}
//     </TodoContext.Consumer>
// )