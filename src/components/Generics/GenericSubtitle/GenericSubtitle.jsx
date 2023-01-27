import React from 'react';
import './GenericSubtitle.scss';

const GenericSubtitle = (props) => {
  return (
    <div className='generic-subtitle__container'>
        <h2 className='generic-subtitle__h2'>{props.subtitleText}</h2>
    </div>
  )
}

export default GenericSubtitle