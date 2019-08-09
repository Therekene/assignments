const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountydb',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log(`Connected to the DB`))
    .catch(() => console.log(err))

app.use('/bounty', require('./route/bountyRouter.js'))


app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})




