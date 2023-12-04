import express from 'express'
import { Pet } from '../models/petModel.js'

const router = express.Router()

// create new pet
router.post('/', async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.breed ||
      !req.body.age
    ) {
      return res.status(400).send({ message: 'Send all required fields: name and breed' })
    }
    const newPet = {
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age
    }
    const pet = await Pet.create(newPet)
    return res.status(201).send(pet)
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
})

// get all pets from db
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find({})
    return res.status(200).json({
      count: pets.length,
      data: pets
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message })
  }
})

// find pet by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const pet = await Pet.findById(id)
    return res.status(200).json(pet)

  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message })
  }
})

// update a pet's info
router.put('/:id', async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.breed ||
      !req.body.age
    ) {
      return res.status(400).send({ message: 'Send all required fields: name and breed' })
    }

    const { id } = req.params
    const result = await Pet.findByIdAndUpdate(id, req.body)

    if (!result) {
      return res.status(404).json({ message: 'Pet not found' })
    }

    return res.status(200).send({ message: 'Pet updated successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message })
  }
})

// // delete a pet
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Pet.findByIdAndDelete(id)

    if (!result) {
      return res.status(400).json({ message: 'Book not found' })
    }

    return res.status(200).send({ message: 'Pet deleted successfully' })
  } catch (error) {
    console.log(error)
    res.send(500).message({ message: error.message })
  }
})

export default router