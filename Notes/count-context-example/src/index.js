import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import CountProvider from './context/CountProvider.js'

ReactDOM.render(
    <BrowserRouter>
        <CountProvider>
            <App />
        </CountProvider>
    </BrowserRouter>, 
document.getElementById('root'))