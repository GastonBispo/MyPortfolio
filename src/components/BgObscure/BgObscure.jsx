import React from 'react';
import './BgObscure.scss';

const BgObscure = (props) => {
  return (
    <div className='bg-obscure'>
      {props.children}
    </div>
  )
}

export default BgObscure