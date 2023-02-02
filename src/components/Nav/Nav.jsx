import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import { motion , AnimatePresence } from 'framer-motion';
import { aparicionBlur } from '../Generics/VariantsFramer/AparicionBlur';


const Nav = () => {
  return (
    <AnimatePresence>
        <motion.div className='nav__container' 
        variants={aparicionBlur}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.8 }} 
        >
          <div className='nav__links'>
            <Link className='nav__link' to="/about">About</Link>
            <Link className='nav__link' to="/myServices">Services</Link>
            <Link className='nav__link' to="/contact">Contact</Link>
          </div>
        </motion.div>
     </AnimatePresence>

    
  )
}

export default Nav