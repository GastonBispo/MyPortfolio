import React from 'react';
import './BgObscure.css';
import BgOrb from '../BgOrb/BgOrb';

const BgObscure = (props) => {
  return (
    <div className='bg-obscure'>
        {/* <div className='aurora2'></div> */}
        <BgOrb/>
      {props.children}
    </div>
  )
}

export default BgObscure