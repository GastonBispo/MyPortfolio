import React, { useState, useEffect } from 'react';
import './NameDescription.scss';
import Tilt from 'react-parallax-tilt';
import { motion , AnimatePresence } from 'framer-motion';
import { AparicionIzquierda } from '../Generics/VariantsFramer/AparicionIzquierda';
import { GiGreatPyramid } from 'react-icons/gi';


const NameDescription = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
            <div className='card__container'>
              <div className='card__name'>
                <h1 className='card__h1'>NUNES BISPO</h1>
                <h2 className='card__h2'>CARLOS GASTON</h2>
              </div>
              <div className='card__bottom-section'>
                <div className='card__logo'>
                  <GiGreatPyramid/>
                </div>
                <div className='card__description'>
                  <p className='card__p'>PROFESSIONAL</p>
                  <p className='card__date'>Since 2010 - {date.toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
     </AnimatePresence>

        
  )
}

export default NameDescription