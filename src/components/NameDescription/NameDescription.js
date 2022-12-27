import React from 'react';
import './NameDescription.css';
import Tilt from 'react-parallax-tilt';
import Glassmorphism from '../Glassmorphism/Glassmorphism';


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
            <Glassmorphism/>
          </Tilt>
        </div>
  )
}

export default NameDescription