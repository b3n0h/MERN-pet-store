import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PetsIcon from '@mui/icons-material/Pets';
import CreatePet from './components/CreatePet';

function App() {
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
  }, [])

  return (
    <div className='container'>
      <h1>Welcome to Pets <PetsIcon /></h1>
      <Routes>
        <Route path='/' element={<Home pets={pets} />} />
        <Route path='/create-pet' element={<CreatePet />} />
      </Routes>
    </div>
  );
}

export default App;