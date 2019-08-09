const express = require('express')
const app = express()

let todos = [
    {
        "completed": false,
        "_id": "5d04025a0b652b74b8c793fb",
        "title": "New Title",
        "description": "build an edit button",
        "price": 1000,
        "imgUrl": "https://images.unsplash.com/photo-1560942485-b2a11cc13456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
        "sessionId": "nateb",
        "__v": 0
    },
    {
        "completed": false,
        "_id": "5d0c1c7bcba047060fe4ad49",
        "title": "yup yup",
        "imgUrl": "https://images.unsplash.com/photo-1560982586-7d2bf2ec3522?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "price": 234235,
        "description": "fun fun fun",
        "sessionId": "nateb",
        "__v": 0
    },
    {
        "completed": true,
        "_id": "5d0d05baf3c121394c4e4c5d",
        "title": "edit button",
        "imgUrl": "https://images.unsplash.com/photo-1561233318-7f668a2e8669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "price": 1000,
        "description": "build an edit button",
        "sessionId": "nateb",
        "__v": 0
    },
    {
        "completed": false,
        "_id": "5d0d10ff59c3f052ec112249",
        "title": "test test",
        "imgUrl": "https://images.unsplash.com/photo-1560914767-6adc42d0daf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "price": 200,
        "description": "Yay it worked",
        "sessionId": "nateb",
        "__v": 0
    },
    {
        "completed": false,
        "_id": "5d10491d832ba60b8e11c782",
        "title": "bob is a builder",
        "imgUrl": "https://images.unsplash.com/photo-1560982535-53d62646d312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "price": 500,
        "description": "omg",
        "sessionId": "nateb",
        "__v": 0
    },]

    app.use(express.json())
    
    app.listen(7000, () => {
        console.log('Server is working')
    })




app.get('/', (req, res) => {
    res.send(todos)
})

app.get('/:_id', (req, res) => {
    const foundTodos = todos.find(todos => todos._id === req.params._id )
    res.send(foundTodos)
})

app.post('/', (req, res) => {
    const newTodos = req.body
    newTodos._id = Math.random().toString()
    todos.push(newTodos)
    res.send(newTodos)
})

app.delete('/:_id', (req, res) => {
    const foundTodos = todos.find(todos => todos._id === req.params._id )
    const updatedDB = todos.filter(todos => todos._id !== req.params._id)
    todos = updatedDB
    res.send(`Successfully deleted ${foundTodos.title}!`)
})

app.put('/:_id', (req, res) => {
    const foundTodos = todos.find(todos => todos._id === req.params._id )
    const updateObj = req.body
    const updatedTodos = Object.assign(foundTodos, updateObj)
    const updatedDB = todos.map(todos => todos._id === req.params._id ? updatedTodos: todos)
    todos = updatedDB
    res.send(updatedTodos)
})



