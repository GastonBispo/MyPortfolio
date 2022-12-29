import React from 'react';
import './SocialIcons.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='social-icons'>
        <a className='social-icons__item' href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <FaFacebook size={32} />
        </a>
        <a className='social-icons__item' href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
           <FaTwitter size={32} />
        </a>
        <a className='social-icons__item' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram size={32} />
        </a>
    </div>
  )
}

export default SocialIcons