import React from 'react';
import './Header&Button.scss';
import GoBackButton from '../GoBackButton/GoBackButton';


const HeaderAndButton = (props) => {
  return (
    <div className='generic-header__container'>
        <h1 className='generic-header__header'>{props.headerText}</h1>
        <GoBackButton/>
    </div> 
  )
}

export default HeaderAndButton