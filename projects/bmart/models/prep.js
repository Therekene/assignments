const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prepSchema = new Schema({
    
    category: {
        type: String,
        required: true,
        enum: ['Necessity', 'Flair' ]
    },
    item: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,

    },
    notes: {
        type: String,
    },
    ispacked: {
        type: Boolean,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})



module.exports = mongoose.model("Prep", prepSchema)