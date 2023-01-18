import React from 'react';
import './NameDescription.scss';
import Tilt from 'react-parallax-tilt';
import { motion , AnimatePresence } from 'framer-motion';
import { aparicionIzquierda } from '../Generics/VariantsFramer/AparicioIzquierda';


const NameDescription = () => {
  return (
    <AnimatePresence>
        <motion.div className='inner-description__container'
          variants={aparicionIzquierda}
          initial='hidden'
          animate='visible'        
        >
          <Tilt
            // tiltAngleYInitial={15} 
            tiltReverse={true} 
            glareEnable={true} 
            glareMaxOpacity={0.8} 
            glareColor="#ffffff" 
            glarePosition="top" 
            glareBorderRadius="15px">
            <div className='name-description__container'>
              <div className='name'>
                <h1>NUNES BISPO</h1>
              </div>
              <div className='description'>
                <p>PRIVATE SECURITY ADVISOR </p>
                <p>WEB DEVELOPER</p>
              </div>
            </div>
          </Tilt>
        </motion.div>
     </AnimatePresence>

        
  )
}

export default NameDescription