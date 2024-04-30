import React from 'react'
import '../css/Landing.css'


const Landing = ({ onEnterClick }) => {


  return (

      <div className='landing-container'>
        <div className='landing-heading'>
          <h1 className='logo-name'>Goal Football<img className="football-image" src="src\images\football_PNG52789.png"></img></h1>
        </div>
        <div className='landing-button'>
          <button onClick={onEnterClick} className='enter-button'>ENTER</button>
        </div>
      </div>
      
  )
}

export default Landing
