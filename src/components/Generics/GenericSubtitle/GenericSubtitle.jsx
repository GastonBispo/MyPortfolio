import React from 'react';
import './GenericSubtitle.scss';

const GenericSubtitle = (props) => {
  return (
    <div className='about-subtitle__container'>
        <h2 className='about-subtitle__h2'>{props.subtitleText}</h2>
    </div>
  )
}

export default GenericSubtitle