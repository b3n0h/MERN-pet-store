import React from "react";
import PetCard from "../components/PetCard";
import './Home.css'

const Home = (props) => {
  return (
    <div className="homeContainer">
      <h3>Current Pets</h3>
      <PetCard pets={props.pets} />
    </div>
  )
}

export default Home