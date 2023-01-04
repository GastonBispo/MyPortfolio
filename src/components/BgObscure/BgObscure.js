import React from 'react';
import './BgObscure.css';
import BgOrb from '../BgObscureOrb/BgOrb';
import Footer from '../footer/Footer';

const BgObscure = (props) => {
  return (
    <>
    <div className='bg-obscure'>
      <BgOrb/>
      {props.children}
    </div>
    <Footer/>
    </>
  )
}

export default BgObscure