import React from 'react';
import './BgObscure.css';

const BgObscure = (props) => {
  const height = props.height;
  const style = { height };
  return (
    <div className='bg-obscure' style={style}>
        <div className='aurora2'></div>
      {props.children}
    </div>
  )
}

export default BgObscure