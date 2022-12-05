import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className='header'>
      <div className='nav-menu'>
          <ul>
            <div className='nav-link'>
              <Link to="/about">About</Link>
            </div>
            <div className='nav-link'>
              <Link to="/contact">Contact</Link>
            </div>
            <div className='nav-link'>
              <Link to="/myServices">Services</Link>
            </div>
          </ul>
        </div>
    </div>
  )
}

export default Nav