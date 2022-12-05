import React from 'react';
import './footer.css';
import BgImg from '../../assets/img/bg-purple.jpg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <img className='bg-img' src={BgImg} alt='BgImg'/>
    </div>
  )
}

export default Footer