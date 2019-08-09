const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000


// middleware for every request
app.use(express.json())
app.use(morgan('dev')) 


// Database Connection
mongoose.connect("mongodb://localhost:27017/drinks", 
    {  // Configuration object for our DB connection
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log("Connected to the DB"))
    .catch(err => console.log(err))


// Routes
app.use("/drinks", require("./routes/drinkRouter.js"))


// Global Error Handler - 
// all errors are passed to this middleware using next() in the routes
app.use((err, req, res, next) => {
    console.error(err)
    // we send it as an object so we can choose what the error response looks like
    // on the front end.  EX:  .catch(err => console.log(err.response.data.errMsg))
    return res.send({errMsg: err.message})
})


// Server listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})