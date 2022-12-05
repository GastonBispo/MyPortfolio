import React from 'react';
import './navLeft.css';
import { Link } from 'react-router-dom';

const NavLeft = () => {
  return (
    <div className='nav-left'>
        <div className='nav-left-item'>
          <Link to='www.linkedin.com/in/gaston-bispo/' className='nav-left-link'>LI</Link>
          {/* <a href='www.linkedin.com/in/gaston-bispo/' className='nav-left-link'>LI</a> */}
        </div>
        <div className='nav-left-item'>
          <a href='www.google.com' className='nav-left-link'>GO</a>
        </div>
    </div>
  )
}

export default NavLeft