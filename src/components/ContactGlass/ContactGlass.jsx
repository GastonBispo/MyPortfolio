import React from 'react';
import './ContactGlass.scss';
import SocialIcons from '../Generics/SocialIcons/SocialIcons';
import Tilt from 'react-parallax-tilt';


const ContactGlass = () => {
  return (
    <div className='tilt-contact-container'>
      <Tilt 
        tiltReverse={true} 
        glareEnable={true}
        // tiltAngleYInitial={15} 
        glareMaxOpacity={2.8} 
        glareColor="#ffffff" 
        glarePosition="top" 
        glareBorderRadius="15px">
        <div className='contact-card__container'>
          <div className='contact-card__header'>
            <h1 className='contact-card__title'>Hello</h1>
          </div>
          <SocialIcons/>
          <div className='contact-card__content'>
            <p className='contact-card__paragraph'>cqerb ilqwb leifblvrwbvl wicbe</p><br/>
            <p className='contact-card__paragraph'>dkhcbal eirubeuri reiurb  brh</p><br/>
            <p className='contact-card__paragraph'>webi iwiueeq uru</p>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

export default ContactGlass