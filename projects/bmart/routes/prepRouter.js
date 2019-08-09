const express = require('express')
const prepRouter = express.Router()
const Prep = require('../models/prep.js')

prepRouter.get('/', (req, res, next) => {
    Prep.find({user: req.user._id}, (err, prep) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(prep)
    })
})
prepRouter.post('/', (req, res, next) =>{
    req.body.user = req.user._id
    const newPrep = new Prep(req.body)
    newPrep.save((err, savedPrep) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(201).send(savedPrep)
    })
})
prepRouter.delete('/_id', (req, res, next) => {
    Prep.findOneAndRemove({ _id: req.params._id }, (err, deletedPrep) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send({prep: deletedPrep, msg:`Successfully removed ${deletedPrep.item}` })
    })
})


module.exports = prepRouter