import React from "react"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

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
    <div>DeletePet</div>
  )
}

export default DeletePet