import React from 'react'
import '../css/Landing.css'


const Landing = ({ onEnterClick }) => {


  return (

      <div className='landing-container'>
        <div className='landing-heading'>
          <img className="football-image" src="src\images\football_PNG52789.png"></img>
          <h1>Football Score</h1>
        </div>
        <div className='landing-button'>
          <button onClick={onEnterClick} className='enter-button'>ENTER</button>
        </div>
      </div>
      
  )
}

export default Landing
