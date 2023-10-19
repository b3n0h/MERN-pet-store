import React from "react";
import PetCard from "../components/PetCard";
import './Home.css'
import CreatePet from "../components/CreatePet";

const Home = (props) => {
  return (
    <div className="homeContainer">
      <CreatePet />

      
      <PetCard pets={props.pets} />
    </div>
  )
}

export default Home