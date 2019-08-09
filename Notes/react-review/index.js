import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import TodoProvider from './context/TodoProvider.js'
// import UserProvider from './context/UserProvider.js'

// Context - State management tool
// passes props
    // you can pass them anywhere

// export const { Provider, Consumer } = React.createContext()

// const data = {
//     username: "joe",
//     _id: "8f93j498fj298fj23"
// }


ReactDOM.render(
    <BrowserRouter>
        <TodoProvider>
            {/* <UserProvider> */}
                <App />
            {/* </UserProvider> */}
        </TodoProvider>
    </BrowserRouter>, 
document.getElementById('root'))