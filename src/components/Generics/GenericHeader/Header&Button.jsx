import React from 'react';
import './Header&Button.scss';
import GoBackButton from '../GoBackButton/GoBackButton';


const HeaderAndButton = (props) => {
  return (
    <div className='about-header__container'>
      
        <h1 className='about-header__header'>{props.headerText}</h1>
        <GoBackButton/>
      {props.children}
    </div> 
  )
}

export default HeaderAndButton