const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, inventory) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.get('/:_id', (req, res, next) => {
    Inventory.findOne({ _id: req.param._id }, (err, foundInventory) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundInventory)
    })
})

inventoryRouter.post('/', (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(inventory)
    })
})

inventoryRouter.delete('/:_id', (req, res, next) => {
    Inventory.findOneAndRemove({ _id: req.params._id }, (err, deletedInventory) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send({
            inventory: deletedInventory,
            msg: `Successfully removed ${deletedInventory.name}`
        }
        )
    })
})


module.exports = inventoryRouter