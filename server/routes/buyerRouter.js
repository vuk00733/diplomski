const express = require('express')
const router = express.Router()
const Buyer = require('../models/buyer')

// Getting all
router.get('/', async (req, res) => {
  try {
    const buyers = await Buyer.find()
    res.json(buyers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Getting one
router.get('/:id',getBuyer, (req,res)=>{
    res.json(res.buyer)
})

// Creating one
router.post('/', async (req, res) => {
  const buyer = new Buyer({
    name: req.body.name,
    surname: req.body.surname,
    address: req.body.address,
    email: req.body.email,
    items: req.body.items
  })
  try {
    const newBuyer = await buyer.save()
    res.status(201).json(newBuyer)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//Updating One
router.patch('/:id', getBuyer, async (req, res) => {
  if (req.body.name != null) {
    res.buyer.name = req.body.name
  }
  if (req.body.surname != null) {
    res.buyer.surname = req.body.surname
  }
  if (req.body.address != null) {
    res.buyer.addres = req.body.address
  }
  if (req.body.email != null) {
    res.buyer.email = req.body.email
  }
  if (req.body.items != null) {
    res.buyer.items = req.body.items
  }
  try {
    const updatedBuyer = await res.buyer.save()
    res.json(updatedBuyer)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}) 

// Deleting One
router.delete('/:id', getBuyer, async (req, res) => {
  try {
    await res.buyer.remove()
    res.json({ message: 'Deleted Buyer' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}) 

//Getting buyer by id and putting it into res, only thing next does is when we reach it just go
//to the next part of the code where we called it from

async function getBuyer(req, res, next) {
    let buyer
    try {
      buyer = await Buyer.findById(req.params.id)
      if (buyer == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.buyer = buyer
    next()
  }

  
module.exports = router