import React from 'react'
import Todo from './Todo.js'

const TodoList = props => {
    const mappedTodos = props.todos.map(todo => 
                            <Todo 
                                {...todo}
                                deleteTodo={props.deleteTodo}
                                editTodo={props.editTodo}
                                key={todo._id}/>)

    return (
        <div>
            { mappedTodos }
        </div>
    )
}

export default TodoList