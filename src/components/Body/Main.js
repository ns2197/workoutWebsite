import React from 'react'
import Group from '../../Image/Group.jpeg'
import Row from '../../Image/Row.jpeg'
import {Link} from 'react-router-dom'
function Main() {
  return (
    <>
      <div className='div1'>
        <img src = {Group} alt = "" />

        <h2> Explore Learn Grow</h2>


      </div>

      <div className='div2'>
        <img src = {Row} alt = "" />
        <div className='message'>
          <h3> New to the Gym?</h3>
          <p> Don't worry We will help you get started
          <br />
          Explore Workouts and Custom Routines 
          that fits your schedule
          </p>

          <Link to='./custom-workouts'>
            <button className='btn'>Explore</button>
          </Link>

        </div>
        

       
      </div>

    </>
  )
}

export default Main