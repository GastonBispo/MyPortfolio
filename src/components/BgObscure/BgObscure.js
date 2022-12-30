import React from 'react';
import './BgObscure.css';

const BgObscure = (props) => {
  return (
    <div className='bg-obscure'>
        <div className='aurora2'></div>
      {props.children}
    </div>
  )
}

export default BgObscure