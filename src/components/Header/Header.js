
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';




function Header() {
  const [clicked, setClicked] = useState(false)

    function handleClick () {
        setClicked(!clicked)
    }   
  return (
    <div className='navbar'>
      <h1 className='title'>
         <Link to = '/' >
            My <CgIcons.CgGym/> Workout
        </Link> 
        </h1>
        <ul className={clicked? 'nav-menu active' : 'nav-menu'}>
            <li><Link to = '/custom-workout'>Workouts</Link></li>
            <li><Link to = '/store'>Shop</Link></li>
            <li><Link to = '/about'>About</Link></li> 
            <li><Link to = '/contact'>Contact</Link></li>
        </ul>

        <div className='profile'>
            <FaIcons.FaUser/>
        </div>

        <div className='menu-bars' onClick={handleClick}>
            {!clicked ? <FaIcons.FaBars/> : <FaIcons.FaTimes/>} 
        </div>



    


      
    </div>








  )
}

export default Header