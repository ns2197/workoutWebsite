import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'

import ULUL from '../../Image/ULUL.jpeg'
import FullBody from '../../Image/FullBody.jpeg'

 

function Workout() {
  return (
    <div>
        <Header />

        <div className='card1'>
          <img src = {FullBody} alt = "" />
          <p>For Three Day Routine, We recommend doing a full
            body workout and focusing on major compound movements 
            as a beginner or for someone who is starting in the gym
          </p>
        </div>
        <Link to='/threeday'>
            <button className='btn'>Select 3 Day</button>
          </Link>
        
          

        <div className='card2'>

        <img  src = {ULUL} alt = "" />
          <p>
            For a four day routine we recommend doing a 
            Upper-Lower split where you should focus the first 
            2 session on Strength Training and second 2 sessions on 
            Hypertrophy Focused
          </p>
        </div>
        <Link to='/fourday'>
            <button className='btn'>Select 4 Day</button>
          </Link>


        
    </div>


       

       


  )
}

export default Workout