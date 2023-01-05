import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'

import ULUL from '../../Image/ULUL.jpeg'
import FullBody from '../../Image/FullBody.jpeg'



function CustomWorkout() {
  return (
    <div>
        <Header />

        <div className='card'>
        <div className='circle'></div>
        <div className='content'>
            <h2>3 Day Routine</h2>

            <p>For Three Day Routine, We recommend doing a full
                body workout and focusing on major compound movements 
                as a beginner or for someone who is starting in the gym
            </p>

            <Link to = '/three-day-routine'>Explore Routine</Link>
        </div>
        <img className = "fullbody" src = {FullBody} alt = "" />
        
       </div>
    </div>

       

       


  )
}

export default CustomWorkout