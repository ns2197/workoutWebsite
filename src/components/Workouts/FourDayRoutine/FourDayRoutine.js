import Header from '../../Header/Header'

import Back from '../../../Image/Back.jpeg'
import Chest from '../../../Image/Chest.jpeg'
import Legs from '../../../Image/Legs.jpeg'
import UpperOne from './UpperOne'
import UpperTwo from './UpperTwo'
import LowerOne from './LowerOne'
import LowerTwo from './LowerTwo'

function FourDayRoutine() {
  return (
    <div>

      <Header />
      
      <div className = 'fullbody'>

      <h2>Day 1: Upper Body 1</h2> 
        <div className='chest-focus'>  
             
            <div className = 'c-routine'>
              <UpperOne />
            </div>
          <img classname = "chest" src = {Chest} alt = "" />
        </div>

        <h2>Day 2: Lower Body 1 </h2>
        <div className='back-focus'>  
          <div className='b-routine'>
            <LowerOne />
          </div>        
          
          <img classname = "back" src = {Legs} alt = "" />
        </div>

        <h2>Day 4: Upper Body 2</h2>
        <div className='legs-focus'> 
          <div className='l-routine'>
          <UpperTwo />
          </div>          
          <img className = "leg" src = {Back} alt = "" />
        </div>

        <h2>Day 5: Lower Body 2</h2>
        <div className='legs-focus'> 
          <div className='l-routine'>
          <LowerTwo />
          </div>          
          <img className = "leg" src = {Legs} alt = "" />
        </div>
      </div>


    </div>
  )
}

export default FourDayRoutine