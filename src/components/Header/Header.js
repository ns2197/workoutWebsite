import React, { useState } from 'react';
import { FaList, FaTimes, FaUser, FaAngleDown } from 'react-icons/fa';
import {Link} from 'react-router-dom'

import mw from '../../Image/mw.jpeg'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Keep track of whether the menu is open or not

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the value of menuOpen
  };

  return (
    <div className='header-element'>
        <h2>
            <Link className='title' to = '/'><img src = {mw} alt = " " /></Link>
        </h2>

      {/* Only show the menu toggle button on small screens */}
        <div className='navbar'>
            
            <ul id = 'list' className={menuOpen ? 'mobile-menu' : ''}>
                <li classname = 'dropdown-menu'>
                    <Link className='dropbtn' to=''>
                        <span>
                            Workouts
                            <FaAngleDown/>
                        </span>
                    </Link>

                    <ul className='dropdown-content'>
                        <li><Link to='/custom-workout'>Custom Workout</Link></li>
                        <li><Link to='/workout-videos'>Workout Videos</Link></li>
                    </ul>
                </li>
                <li><Link to='/store'>Merchandise</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className='profile'>
            <i><FaUser/><FaAngleDown className='down'/></i>
        </div>
        <div className='mobile' onClick={toggleMenu}>
            {menuOpen ? <FaTimes className='close'/> : <FaList className='hamburger-menu' />}
        </div>

        
        </div>
  );
};

export default Header;