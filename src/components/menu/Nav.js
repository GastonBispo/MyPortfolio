import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className='menu-container'>
      <div className='menu'>
        <Link className='menu-link' to="/about">About</Link>
        <Link className='menu-link' to="/myServices">Services</Link>
        <Link className='menu-link' to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Nav