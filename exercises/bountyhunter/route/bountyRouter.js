const express = require('express')
const uuid = require('uuid/v4')
const bountyRouter = express.Router()
const Bounty = require('../models/bountyModel.js')

// let bounty = [
//     {firstName:'Jabba',    lastName:'Hutt',      living: true, reward:10000,   type:'Sith', _id:uuid()},
//     {firstName: 'Han',     lastName:'Solo',      living: true, reward: 7000,   type:'Jedi', _id:uuid()},
//     {firstName: 'Leah',    lastName:'Skywalker', living: true, reward: 30000,  type:'Jedi', _id:uuid()},
//     {firstName: 'Luke',    lastName:'Skywalker', living: true, reward: 50000,  type:'Jedi', _id:uuid()},
//     {firstName: 'Trooper', lastName:'55213',     living:false, reward: 500,    type:'Sith', _id:uuid()}

// ]
bountyRouter.get('/', (req, res, next) => {
    Bounty.find((err, bounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

// bountyRouter.get ('/bounty', (req, res) => {
//     res.send(bounty)
// })
bountyRouter.get('/:_id', (req, res, next) => {
    Bounty.findOne({ _id: req.params._id }, (err, foundBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundBounty)
    })
})
// bountyRouter.get ('/bounty/:_id', (req, res) => {
//     const foundBounty = bounty.find(bounty => bounty._id === req.params._id)
//     res.send(foundBounty)
// })

bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, saveBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})
// bountyRouter.post ('/bounty', (req, res) => {
//     const newBounty = req.body
//     newBounty._id = uuid()
//     bounty.push(newBounty)
//     res.send(newBounty)
// })
bountyRouter.delete('/_id', (req, res, next) => {
    Bounty.findOneAndRemove({ _id: req.params._id }, (err, deletedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send({ bounty: deletedBounty, msg: `Successfully deleted ${deletedBounty.name}` })
    })
})
// bountyRouter.delete ('/bounty/:_id', (req, res) => {
//     const foundBounty = bounty.find(bounty => bounty._id === req.params._id)
//     const updatedDB = bounty.filter(bounty => bounty._id !== req.params._id)
//     bounty = updatedDB
//     res.send (`Successfully removed the ${foundBounty.firstName} ${foundBounty.lastName}.`)
// })
bountyRouter.put('/:id', (req, res, next) => {
    Bounty.findByIdAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})
// bountyRouter.put ('/bounty/:_id', (req, res) => {
//     const foundBounty = bounty.find(bounty => bounty._id === req.params._id)
//     const updateObj = req.body
//     const updatedBounty = Object.assign(foundBounty, updateObj)
//     const updatedDB = bounty.map(bounty => bounty._id === req.params._id ? updatedBounty : bounty)
//     bounty = updatedDB
//     res.send(updatedBounty)
// })


module.exports = bountyRouter