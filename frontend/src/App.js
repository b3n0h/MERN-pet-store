import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    try {
      axios
        .get('http://localhost:5555/pets')
        .then((res) => {
          setPets(res.data.data)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div>
      <ul>
        {pets.map((pet) => {
          return <li>{pet.name}, {pet.breed}</li>
        })}
      </ul>
    </div>
  );
}

export default App;