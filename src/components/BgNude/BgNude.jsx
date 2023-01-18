import React from 'react';
import './BgNude.scss';

const BgNude = (props) => {
  return (
    <div className='bg-nude'>
      {props.children}
    </div>
  )
}

export default BgNude