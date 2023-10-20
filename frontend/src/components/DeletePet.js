import React from "react"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import classes from './DeletePet.module.css'

const DeletePet = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDeletePet = () => {
    axios
      .delete(`http://localhost:5555/pets/${id}`)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={classes.deleteContainer}>
      <h2>Are you sure you want to delete this pet?</h2>
      <button onClick={handleDeletePet}>Delete</button>
    </div>
  )
}

export default DeletePet