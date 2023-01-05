import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
            <div className='header-content'>

                <div className='title'>
                    <h1>
                    <Link to = '/' 
                    style={{ textDecoration: 'none', color: 'blue', margin: '10px'}}>
                    MyWorkout
                    </Link>
                    </h1>
                </div>

                <div className='navbar'>

                    <ul>
                        <li className='workout-dropdown'>
                            <Link to = ''>Workouts</Link>
                                <ul className='dropdown-contents'>
                                    <li><Link to = '/custom-workouts'>Custom Workouts</Link></li>
                                    <li><Link to = '/workout-videos'>Workout Videos</Link></li>
                                </ul>
                        </li>

                        <li><Link to = '/store'>Merchandise</Link></li>
                        <li><Link to = '/about'>About</Link></li>
                        <li><Link to = '/contact'>Contact</Link></li>


                        
                    </ul>
                    
                </div>
            </div>

    </header>
  )
}

export default Header