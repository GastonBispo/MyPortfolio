import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { motion , AnimatePresence } from 'framer-motion';
import { aparicionBlur } from '../Generics/VariantsFramer/AparicionBlur';


const Nav = () => {
  return (
    <AnimatePresence>
        <motion.div className='menu-container' 
        variants={aparicionBlur}
        initial='hidden'
        animate='visible'
        >
          <div className='menu'>
            <Link className='menu-link' to="/about">About</Link>
            <Link className='menu-link' to="/myServices">Services</Link>
            <Link className='menu-link' to="/contact">Contact</Link>
          </div>
        </motion.div>
      
     </AnimatePresence>

    
  )
}

export default Nav