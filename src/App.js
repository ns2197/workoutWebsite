import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Store from './components/Header/Navbar/Store'
import About from './components/Header/Navbar/About'
import Home from './components/Home' 
import Contact from './components/Header/Navbar/Contact'


import WorkoutVideos from './components/Workouts/WorkoutVideos'
import CustomWorkout from './components/Workouts/CustomWorkout'

import ThreeDayRoutine from './components/Workouts/ThreeDayRoutine/ThreeDayRoutine'
import FourDayRoutine from './components/Workouts/FourDayRoutine/FourDayRoutine'



import './style/Header.css'
import './style/Main.css'
import './style/Workout.css'
import './style/App.css'

function App() {
  return (
    <div>

<Routes>
      <Route path = '/' element = {<Home />} /> 
      <Route path = 'about' element = {<About />} />     
      <Route path = 'contact' element = {<Contact />} /> 
      <Route path = 'store' element = {<Store />} /> 

      <Route path = 'workout-videos' element = {<WorkoutVideos />} /> 
      <Route path = 'custom-workouts' element = {<CustomWorkout />} /> 

      <Route path = 'three-day-routine' element = {<ThreeDayRoutine />} /> 
      <Route path = 'four-day-routine' element = {<FourDayRoutine />} /> 


 
    </Routes>
    
      
    
    </div>
  )
}

export default App