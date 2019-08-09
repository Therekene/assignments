const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 7000

// Middleware
app.use(express.json()) // req.body
app.use(morgan('dev')) 


app.use((req, res, next) => {
    console.log("MIDDLEWARE WAS HIT")
    req.body.description = "Howdy"
    req.body.imgUrl = "someImgUrl"
    next()
})

app.post("/stuff/:id", (req, res, next) => {
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})