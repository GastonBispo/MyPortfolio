import React from 'react';
import './ProfileCard.scss';
import ProfilePic from '../../assets/img/Nunes Bispo Pic.jpg';
import Tilt from 'react-parallax-tilt';
import { AparicionDerecha } from '../Generics/VariantsFramer/AparicionDerecha';
import { motion , AnimatePresence } from 'framer-motion';

const ProfileCard = () => {
  return (
  <div className='tilt-profile-container'>
    <Tilt 
        tiltReverse={true} 
        glareEnable={true}
        // tiltAngleYInitial={-15} 
        glareMaxOpacity={2.8} 
        glareColor="#ffffff" 
        glarePosition="top" 
        glareBorderRadius="15px">
          <AnimatePresence>
            <motion.div className="profile-card__container"
              variants={AparicionDerecha}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.4 }}
              >
              <img src={ProfilePic} alt='Profile img' className="profile-card__pic"></img>
              <div class="profile-card__info">
                <h1 className="profile-card__surname">Nunes Bispo</h1>
                <h2 className='profile-card__name'>Carlos Gaston</h2>
                <p className="profile-card__occupations">Advisor - Developer</p>
                <p className="profile-card__nationality">Bs. As. Argentina</p>              
              </div>
            </motion.div>
          </AnimatePresence>
    </Tilt>
  </div>
  )
}

export default ProfileCard