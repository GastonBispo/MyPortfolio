import React from 'react';
import './AboutHeader.css';
import GoBackButton from '../../Generics/GoBackButton/GoBackButton';

const AboutHeader = (props) => {
  return (
    <div className='about-header__container'>
      <h1 className='about-header__header'>About</h1>
      {props.children}
      <GoBackButton/>
    </div>
  )
}

export default AboutHeader