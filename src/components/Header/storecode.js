import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaAngleDown } from 'react-icons/fa';
import {Link} from 'react-router-dom'

import mw from '../../Image/mw.jpeg'


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Keep track of whether the menu is open or not

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the value of menuOpen
  };

  return (
    <div className='header-container'>
        <div className='header-element'>
            <h2>
                <Link className='title' to = '/'><img src = {mw} alt = " " /></Link>
            </h2>

        {/* Only show the menu toggle button on small screens */}
            <div className='navbar'>
            
                <ul id = 'list' className={menuOpen ? 'mobile-menu' : '#list'}>
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
            {menuOpen ? <FaTimes className='close'/> : <FaBars className='hamburger-menu' />}
            </div>

        
        </div>
    </div>
  );
};

.header-element img {
    width: 100px;
    height: 65px;
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px
  }
  
  .header-element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: white;
    background: grey;
    width: 100%;
    height: 110px;
  }
  
  .navbar ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .navbar ul li {
    list-style: none;
    padding: 0 20px;
    position: relative;
  }
  
  .navbar ul li a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
    transition: 0.5s ease-in-out;
  }
  
  .navbar ul li a:hover {
    color: rgb(26, 230, 15);
    transition: 0.5s;
  }
  
  .navbar ul li a:hover::after {
    content: '';
    background: rgb(26, 230, 15);
    width: 30%;
    height: 2px;
    position: absolute;
    bottom: -4px;
    left: 20px;
  }
  
  .mobile {
    display: none;
  }
  
  .mobile i {
    color: white;
    align-items: center;
  }
  
  /* Hide menu items on small screens */
  
  
  @media screen and (max-width: 770px) {
    .mobile {
      display: flex;
    }
    .navbar ul{
      display: none;
    }
    .navbar ul li {
      display: none;
    }
    .mobile .hamburger-menu, .close {
      cursor: pointer;
    }
  
     .navbar ul{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: fixed;
      top: 110px;
      right: -150px;
      line-height: 100px;
      width: 500px;
  
      height: 100vh;
      background: grey;
      padding: 40px 0 0 10px;
      transition: 1s ease-in-out
    }
  
  
  .navbar .mobile-menu li {
    display: block;
   
    right: 0px;
  
  }
  }
  
  
  
  
  
  
  /* for the dropdown menu */
  ul li ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding-left: 0;
    left: 0;
    display: none;
    margin-top: 10px;
  }
  
  ul li:hover > ul,
  ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
    min-width: 250px;
    text-align: left;
  }
  ul li ul li {
    clear: both;
    width: 100%;
    text-align: left;
    margin-bottom: 5px;
    margin-top: 30px;
    border-style: none;
  }
  ul li ul li a:hover {
    padding-left: 10px;
    border-left: 2px solid #3ca0e7;
    transition: all 0.3s ease;
  }
  ul li ul li a { 
    transition: all 0.5s ease; 
  }
  
  
  
  /* Responsive design - make the dropdown menu appear horizontally instead of vertically on small screens */
  @media screen and (max-width: 770px) {
    ul li  {
      position: relative;
      display: flex;
    }
  
    ul li ul{
      display: block;
      width: 100%;
      text-align: left;
    }
  }
  
  /* Add a fade-in animation to the dropdown menu */
  
  ul li ul li{
    animation: fadeIn 0.5s;
  }
  
  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  
  

export default Header;