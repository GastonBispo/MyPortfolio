import React from 'react';
import './Loader.css';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderNude =() => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -1 }}
        animate={{ y: 0 }}
        exit={{ y: 1 }}
        transition={{ duration: 1.3, ease: 'easeInOut' }}
        
      >
        <div className='loader-container-nude'></div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoaderNude;