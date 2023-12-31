import React, { useState } from "react"
import classes from './CreatePet.module.css'
import axios from "axios"

const CreatePet = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleSavePet = () => {
    const newPet = {
      name,
      breed,
      age
    }
    setLoading(true)
    axios
      .post('http://localhost:5555/pets', newPet)
      .then(() => {
        setLoading(false)
        window.location.reload()
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <div className={classes.createContainer}>
      <h2>Create a new pet</h2>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" />

      <label>Breed</label>
      <input value={breed} onChange={(e) => setBreed(e.target.value)} type="text" />

      <label>Age</label>
      <input value={age} onChange={(e) => setAge(e.target.value)} type="number" min={1} />
      <button onClick={handleSavePet}>Create new pet</button>
    </div>
  )
}

export default CreatePet