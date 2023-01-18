import React from 'react';
import './ContactGlass.scss';
import SocialIcons from '../Generics/SocialIcons/SocialIcons';
import Tilt from 'react-parallax-tilt';


const ContactGlass = () => {
  return (
    // <div className='inner-contact__ontainer'>
      <Tilt tiltReverse={true} 
        glareEnable={true}
        tiltAngleYInitial={15} 
        glareMaxOpacity={2.8} 
        glareColor="#ffffff" 
        glarePosition="top" 
        glareBorderRadius="15px">
        <div className='contact-card'>
          <div className='contact-card__header'>
            <h1 className='contact-card__title'>Hello</h1>
          </div>
          <div className='contact-card__content'>
            <p className='contact-card__paragraph'>cqerb ilqwb leifblvrwbvl wicbe</p><br/>
            <p className='contact-card__paragraph'>dkhcbal eirubeuri reiurb  brh</p><br/>
            <p className='contact-card__paragraph'>webi iwiueeq uru</p>
          </div>
          <SocialIcons/>
        </div>
      </Tilt>
    // </div>
  )
}

export default ContactGlass