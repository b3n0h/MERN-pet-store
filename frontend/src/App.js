import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PetsIcon from '@mui/icons-material/Pets';
import CreatePet from './components/CreatePet';
import DeletePet from './components/DeletePet';
import EditPet from './components/EditPet';

function App() {

  return (
    <div className='container'>
      <h1>Welcome to Pets <PetsIcon /></h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pets/create' element={<CreatePet />} />
        <Route path='/pets/edit/:id' element={<EditPet />} />
        <Route path='/pets/delete/:id' element={<DeletePet />} />
      </Routes>
    </div>
  );
}

export default App;