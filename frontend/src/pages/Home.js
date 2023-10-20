import React, { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "../components/PetCard";
import './Home.css'
import CreatePet from "../components/CreatePet";
import { useParams } from "react-router-dom";

const Home = () => {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    try {
      axios
        .get('http://localhost:5555/pets')
        .then((res) => {
          setPets(res.data.data)
        })
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [pets])

  return (
    <div className="homeContainer">
      <CreatePet />
      <PetCard pets={pets} />
    </div>
  )
}

export default Home