import React from "react"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const EditPet = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleEditPet = () => {
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
    <div>EditPet</div>
  )
}

export default EditPet