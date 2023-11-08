import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PetsIcon from '@mui/icons-material/Pets';
import CreatePet from './components/CreatePet';
import DeletePet from './components/DeletePet';
import EditPet from './components/EditPet';
import classes from './App.module.css'
import Footer from './components/Footer';

function App() {

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Welcome to Pets <PetsIcon /></h1>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pets/create' element={<CreatePet />} />
        <Route path='/pets/edit/:id' element={<EditPet />} />
        <Route path='/pets/delete/:id' element={<DeletePet />} />
      </Routes>
      <div className={classes.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;