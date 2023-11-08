import React, { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "../components/PetCard";
import classes from './Home.module.css'
import CreatePet from "../components/CreatePet";

const Home = () => {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(false)

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
    <React.Fragment>
      <div className={classes.homeContainer}>
        <CreatePet />
        {loading ? <PetCard pets={pets} /> : 'Fetching pets'}
      </div>
    </React.Fragment>
  )
}

export default Home