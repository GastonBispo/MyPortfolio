import React from 'react';
import './NameDescription.css';
import Tilt from 'react-parallax-tilt';




const NameDescription = () => {
  return (
      
        <div className='innerContainer'>
          <Tilt
            tiltAngleYInitial={20} 
            tiltReverse={true} 
            glareEnable={true} 
            glareMaxOpacity={0.8} 
            glareColor="#ffffff" 
            glarePosition="top" 
            glareBorderRadius="15px">
          <div className='nameDescriptionContainer'>
              <div className='name'>
                <h1>NUNES BISPO</h1>
              </div>
              <div className='description'>
                <p>PRIVATE SECURITY ADVISOR </p>
                <p>REACT DEVELOPER</p>
              </div>
          </div>
          </Tilt>
        </div>
  )
}

export default NameDescription