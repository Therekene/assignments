const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.send("Something else")
})

app.listen(7000, () => {
    console.log('Server is running on port 7000')
})