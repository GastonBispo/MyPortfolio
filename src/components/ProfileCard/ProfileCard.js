import React from 'react';
import './ProfileCard.css';
import ProfilePic from '../../assets/img/example-profile.jpg';
import Tilt from 'react-parallax-tilt';
import { aparicionDerecha } from '../Generics/VariantsFramer/aparicionDerecha';
import { motion , AnimatePresence } from 'framer-motion';

const ProfileCard = () => {
  return (
    <div className='inner-profile__ontainer'>
    <Tilt 
        tiltReverse={true} 
        glareEnable={true}
        tiltAngleYInitial={-15} 
        glareMaxOpacity={2.8} 
        glareColor="#ffffff" 
        glarePosition="top" 
        glareBorderRadius="15px">
          <AnimatePresence>
            <motion.div class="profile-card"
            variants={aparicionDerecha}
            initial='hidden'
            animate='visible'
            >
            <img src={ProfilePic} alt='card-img' class="profile-card__pic"></img>
            <div class="profile-card__info">
                <h1 class="profile-card__name">Carlos Gaston Nunes Bispo</h1>
                <p class="profile-card__occupations">Private Security Advisor - Web Developer</p>
                <p class="profile-card__nationality">Argentine</p>              
            </div>
        </motion.div>
     </AnimatePresence>
    </Tilt>
    </div>
  )
}

export default ProfileCard