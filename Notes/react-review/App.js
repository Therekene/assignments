import React from 'react'
// import { Consumer } from './index.js'
import { withTodos } from './context/TodoProvider.js'
// import { withUser } from './context/UserProvider.js'
import Form from './shared/Form.js'
import TodoForm from './TodoForm.js'

const App = (props) => {
    return (
        <div>
            <Form 
                inputs={{ title: "", description: "" }}
                submit={inputs => props.addTodo(inputs)}
                render={formProps => <TodoForm {...formProps}/>}
            />
            {props.todos.map(todo => <h1>{todo.title}</h1>)}
        </div>
    )
}

export default withTodos(App)
// export default withUser(withTodos(App))

    //const App = () => {
    //     return (
    //         <div>
    //             <Consumer>
    //                 { value => 
    //                     <h1>{value.username}</h1>
    //                 }
    //             </Consumer>
    //         </div>
    //     )
    // }

         {/* <Form 
                inputs={{ username: "", password: ""}}
                submit={inputs => props.login(inputs)}
                render={formProps => <LoginForm {...formProps}/>}
            />
        <Form 
            inputs={{ username: "", password: ""}}
            submit={inputs => props.signup(inputs)}
            render={formProps => <SignupForm {...formProps}/>}
        /> */}