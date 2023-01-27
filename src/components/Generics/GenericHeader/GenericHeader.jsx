import React from 'react';
import './GenericHeader.scss';
import GoBackButton from '../GoBackButton/GoBackButton';


const GenericHeader = (props) => {
  return (
    <div className='generic-header__container'>
        <h1 className='generic-header__header'>{props.headerText}</h1>
        <GoBackButton/>
    </div> 
  )
}

export default GenericHeader