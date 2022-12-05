import './heroImg.css';
import React from 'react';
import Legend from '../legend/Legend';
import Nav from '../nav/Nav';
import NavLeft from '../nav-left/NavLeft';

const HeroImg = () => {
  return (
    <div className='bg-nude'>
        <NavLeft/>
        <Legend/>
        <Nav/>
    </div>
  )
}

export default HeroImg