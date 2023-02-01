import React from 'react';
import './NameDescription.scss';
import Tilt from 'react-parallax-tilt';
import { motion , AnimatePresence } from 'framer-motion';
import { AparicionIzquierda } from '../Generics/VariantsFramer/AparicionIzquierda';


const NameDescription = () => {
  return (
    <AnimatePresence>
        <motion.div className='inner-description__container'
          variants={AparicionIzquierda}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}        
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
              <div className='name-description__name'>
                <h1>NUNES BISPO</h1>
              </div>
              <div className='name-description__description'>
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