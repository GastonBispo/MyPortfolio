import './heroImg.css';
import React from 'react';
import NameDescription from '../NameDescription/NameDescription';
import Nav from '../menu/Nav';

const HeroImg = () => {
  return (
    <div className='bg-nude'>
      <div className='aurora1'></div>
        <NameDescription/>
        <Nav/>
    </div>
  )
}

export default HeroImg