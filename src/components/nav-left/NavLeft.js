import React from 'react';
import './navLeft.css';
import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import {CgShapeHexagon} from 'react-icons/cg';


function NavLeft() {
  return (
    <div className='nav-left'>
      <div className='logo-contenedor'>
        <a href='index.html' className='logo'><CgShapeHexagon /></a>
      </div>
      <div className='nav-left-item'>
        <a href='https://www.google.com' className='fa-icon'><FaLinkedin /></a>
        <a href='https://www.github.com' className='fa-icon'><FaGithub /></a>
        <a href='https://www.instagram.com' className='fa-icon'><FaInstagram /></a>
      </div>
    </div>
  );
}

export default NavLeft