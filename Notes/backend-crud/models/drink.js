const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Declares/Defines what our data should look like
const drinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    hasAlcohol: {
        type: Boolean,
        required: true
    },
    ingredients: {
        type: [String],
        default: []
    },
    imgUrl: {
        type: String,
        default: ""
    }
})

// Be used to query the database for that model
module.exports = mongoose.model("Drink", drinkSchema)