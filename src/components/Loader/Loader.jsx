import React from 'react';
import './Loader.scss';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderNude =() => {
  return (
    <AnimatePresence>
      <div className='loader__bg'>
        <motion.div className='loader__container'
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}>
          <div className='loader__div'> Loader </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default LoaderNude;