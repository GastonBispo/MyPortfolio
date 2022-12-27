import React from 'react';
import './BgNude.css';

const BgNude = (props) => {
  return (
    <div className='bg-nude'>
        <div className='aurora1'></div>
      {props.children}
    </div>
  )
}

export default BgNude