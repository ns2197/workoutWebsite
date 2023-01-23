import Header from '../../Header/Header'

import Back from '../../../Image/Back.jpeg'
import Chest from '../../../Image/Chest.jpeg'
import Legs from '../../../Image/Legs.jpeg'
import ChestFocus from './ChestFocus'
import BackFocus from './BackFocus'
import LegsFocus from './LegsFocus'
function ThreeDayRoutine() {
  return (
    <div>

      <Header />
      
      <div className = 'fullbody'>

      <h2>Chest or Push Full Body 1</h2> 
        <div className='chest-focus'>  
             
            <div className = 'c-routine'>
              <ChestFocus />
            </div>
          <img classname = "chest" src = {Chest} alt = "" />
        </div>

        <h2>Back or Pull Focus Full Body 2</h2>
        <div className='back-focus'>  
          <div className='b-routine'>
            <BackFocus />
          </div>        
          
          <img classname = "back" src = {Back} alt = "" />
        </div>

        <h2>Legs Focus Full Body 3</h2>
        <div className='legs-focus'> 
          <div className='l-routine'>
          <LegsFocus />
          </div>
          
          <img className = "leg" src = {Legs} alt = "" />
        </div>
      </div>


    </div>
  )
}

export default ThreeDayRoutine