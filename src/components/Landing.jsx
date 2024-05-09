import React from 'react'
import '../css/Landing.css'


const Landing = ({ onEnterClick }) => {


  return (

      <div className='landing-container'>
        <div className='landing-heading'>
        <img className="football-image" src="src\images\image_processing20200410-18222-12ilqee.png"></img><h1 className='logo-name'>Goal Football</h1>
        </div>
        <div className='landing-button'>
          <button onClick={onEnterClick} className='enter-button'>ENTER</button>
        </div>
      </div>
      
  )
}

export default Landing
