const express = require('express')
const app = express()

// Movies collection - Fake Database
let movies = [
    { title: "Star wars, a new hope",      genre: "sci-fi/fantasy", _id: "1" },
    { title: "Lord of the rings",          genre: "fantasy",        _id: "2" },
    { title: "Bambi",                      genre: "fantasy",        _id: "3" },
    { title: "Bambi II - bambi's revenge", genre: "fantasy/horror", _id: "4" }
]

// Middleware that fires on every request
// It looks for a request object (POST, PUT), and turns
// it into 'req.body'
app.use(express.json())


// GET ALL REQUEST
app.get("/movies", (req, res) => {
    // Send the whole collection
    res.send(movies)
})

// GET ONE REQUEST - with request parameters (req.params)
app.get('/movies/:_id', (req, res) => {
    // Find the movie by the _id sent by the user in req.params._id  
    const foundMovie = movies.find(movie => movie._id === req.params._id)
    // Send back the movie Object (Don't use filter, that would send an array)
    res.send(foundMovie)
})  

// POST REQUEST - ADD ONE - INSERT ONE
app.post("/movies", (req, res) => {
    // Grab the user's POST object (req.body)
    const newMovie = req.body
    // Add an _id to the object (just like MONGODB will)
    newMovie._id = Math.random().toString()
    // Add the new movie to the collection of movies 
    movies.push(newMovie)
    // Send back movie once it's been added to the DB
    res.send(newMovie)
})

// DELETE REQUEST - DESTROY ONE
app.delete("/movies/:_id", (req, res) => {
    // Find the movie to delete so we can use its title in the send message
    const foundMovie = movies.find(movie => movie._id === req.params._id)
    // Filter over the DB and remove the movie with the _id === req.params._id
    const updatedDB = movies.filter(movie => movie._id !== req.params._id)
    // Update the DB (since this is a fake db)
    movies = updatedDB
    // Send back a response of some sort
    res.send(`Successfully deleted ${foundMovie.title}!`)
})

// PUT REQUEST - UPDATE ONE
app.put("/movies/:_id", (req, res) => {
    // First, find the object to update
    const foundMovie = movies.find(movie => movie._id === req.params._id)
    // Save the update object from the user in a variable
    const updateObj = req.body
    // Update the object using Object.assign()
    const updatedMovie = Object.assign(foundMovie, updateObj)
    // Loop through DB and replace the outdated movie with the updated movie
    const updatedDB = movies.map(movie => movie._id === req.params._id ? updatedMovie : movie)
    // Overwrite DB (because we're using a fake db)
    movies =  updatedDB
    // Send back updated movie object to client
    res.send(updatedMovie)
})


app.listen(7000, () => {
    console.log(`Server is running on Port 7000`)
})



// REST
    // REpresentational State Transfer
    // Endpoints should reprensent the state you are requesting

// RESTful endpoints
// base url:  www.campingisgood.com
// tents, gear (food, backpack, flashlight), clothing, sleeping bags, repellent\

// www.campingisgood.com/tents    // collection
// www.campingisgood.com/tents/1  // resource

// www.campingisgood.com/gear/backpacks/56
// www.campingisgood.com/gear/clothing/shoes
