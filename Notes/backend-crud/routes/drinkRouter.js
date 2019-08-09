const express = require("express")
const drinkRouter = express.Router()
const Drink = require('../models/drink.js')


// Get All
drinkRouter.get("/", (req, res, next) => {
    // .find looks for the entire collection and will always return an array
    // An optional first argument can be given for the find() to filter the results,
    // such as .find({hasAlcohol: true}) would return an array of all alcoholic drinks.
    Drink.find((err, drinks) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(drinks)
    })
})

// Get One
drinkRouter.get("/:_id", (req, res, next) => {
    // findOne needs to know which to find, so we send the id received from the 
    // user in the request parameters.  (req.params)
    Drink.findOne({ _id: req.params._id }, (err, foundDrink) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundDrink)
    })
})

// Post (insert one)
drinkRouter.post("/", (req, res, next) => {
    // Using the model, we create the new object so it is ready to save in the DB.
    // This provides the _id and __v on the object
    const newDrink = new Drink(req.body)
    // .save will save the object in the database
    newDrink.save((err, savedDrink) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedDrink)
    })
})

// Delete One - DELETE
drinkRouter.delete("/:_id", (req, res, next) => {
    // findOneAndRemove needs the _id of the item to remove just like findOne needs
    // it for finding the particular object
    Drink.findOneAndRemove({ _id: req.params._id }, (err, deletedDrink) => {
        if(err){
            res.status(500)
            return next(err)
        }

        return res.status(202).send(
            {
                drink: deletedDrink, 
                msg: `Successfully deleted ${deletedDrink.name}`
            }
        )
    })
})

// Update One - PUT
drinkRouter.put("/:_id", (req, res, next) => {
    // FindOne and update needs the _id of the item to update, and how to update it.
    Drink.findOneAndUpdate(   // 4 arguments
        {_id: req.params._id},   // 1. The _id of the item to update
        req.body,                // 2. The update, if you use just req.body, it will update the object in the DB with this object.
        {new: true},             // 3. Send back the updated version of the object, by default it will send the old version.
        (err, updatedDrink) => { // 4. Callback function that gives the error or successful response.
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedDrink)
        }
    )
})


module.exports = drinkRouter