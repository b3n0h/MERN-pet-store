import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'

import classes from './EditPet.module.css'

const EditPet = () => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:5555/pets/${id}`)
      .then((response) => {
        setName(response.data.name)
        setBreed(response.data.breed)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const handleEditPet = () => {
    const data = {
      name,
      breed
    }
    axios
      .put(`http://localhost:5555/pets/${id}`, data)
      .then(() => {
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={classes.editContainer}>
      <label>Name</label>
      <input className={classes.editInput} value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <label>Breed</label>
      <input className={classes.editInput} value={breed} onChange={(e) => setBreed(e.target.value)} type="text" />
      <Link to='/'>
        <button onClick={handleEditPet}>Save</button>
      </Link>
    </div>
  )
}

export default EditPet