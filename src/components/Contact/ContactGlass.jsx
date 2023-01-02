import React from 'react';
import './ContactGlass.css';
import SocialIcons from '../Generics/SocialIcons/SocialIcons';


const ContactGlass = () => {
  return (
    <div className='contact-glass'>
      <div className='contact-glass__header'>
        <h1 className='contact-glass__title'>Hello</h1>
      </div>
      <div className='contact-glass__content'>
        <p className='contact-glass__paragraph'>cqerb ilqwb leifblvrwbvl wicbe</p><br/>
        <p className='contact-glass__paragraph'>dkhcbal eirubeuri reiurb  brh</p><br/>
        <p className='contact-glass__paragraph'>webi iwiueeq uru</p>
      </div>
      <SocialIcons/>
    </div>
  )
}

export default ContactGlass