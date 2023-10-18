import React, { useState } from "react"
import './CreatePet.css'
import axios from "axios"
import { useNavigate, Navigate } from "react-router-dom"

const CreatePet = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSavePet = () => {
    const newPet = {
      name,
      breed
    }
    setLoading(true)
    axios
      .post('http://localhost:5555/pets', newPet)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <div className="createContainer">
      <h3>Create a new pet</h3>
      {loading ? 'Fetching data' : ''}
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" />

      <label>Breed</label>
      <input value={breed} onChange={(e) => setBreed(e.target.value)} type="text" />
      <button onClick={handleSavePet}>Create new pet</button>
    </div>
  )
}

export default CreatePet