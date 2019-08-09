const express = require ('express')
const app = express()
const PORT = process.env.PORT || 7000
const morgan = require('morgan')
const mongoose = require('mongoose')
require ('dotenv').config()
const expressJwt = require('express-jwt')

//middleware
app.use(express.json())
app.use(morgan('dev'))

//DB connection
mongoose.connect('mongodb://localhost:27017/bmart', {
    useNewUrlParser: true,
    useFindAndModify:false,
    useCreateIndex: true
})
.then(() => console.log('connected to the DB'))
.catch(err => console.log(err))

//Routes
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api/prep', require('./routes/prepRouter.js'))


//Global Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//Server Listen
app.listen(PORT, () => console.log (`Server is running on Port ${PORT}`))




