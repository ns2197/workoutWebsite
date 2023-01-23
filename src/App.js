import React from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';
import './index.css';

import Home from './components/Home' 

import About from './components/Header/Navbar/About';
import Contact from './components/Header/Navbar/Contact';
import Store from './components/Header/Navbar/Store';

import Workout from './components/Workouts/Workout';

import ThreeDay from './components/Workouts/ThreeDayRoutine/ThreeDay'
import FourDay from './components/Workouts/FourDayRoutine/FourDay'









function App() {
  return (
    <>


    <Routes>
      <Route path = 'about' element = {<About />} />
      <Route path = 'contact' element = {<Contact />} />
      <Route path = 'store' element = {<Store />} />
      <Route path = '/' element = {<Home />} /> 

      <Route path = 'custom-workout' element = {<Workout />} />

      <Route path = 'threeday' element = {<ThreeDay />}  />
      <Route path = 'fourday' element = {<FourDay />}  />






    </Routes>
    
    </>
    


  )
}
  
export default App