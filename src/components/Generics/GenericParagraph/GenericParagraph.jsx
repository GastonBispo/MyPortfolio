import React from 'react';
import './GenericParagraph.scss';

const GenericParagraph = (props) => {
  return (
    <div className='generic-paragraph__container'>
        <p className='generic-paragraph__paragraph'>{props.paragraphText}</p>
    </div>
  )
}

export default GenericParagraph