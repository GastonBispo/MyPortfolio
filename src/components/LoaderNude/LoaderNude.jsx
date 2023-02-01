import React from 'react';
import './LoaderNude.scss';
import { motion } from 'framer-motion';

const LoaderNude =() => {
  return (
      <div className='loader__bg'>
        <motion.div className='loader__container'
        initial={{ y: '-75%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 0.4 }}>
          <div className='loader__div'> Loader </div>
        </motion.div>
      </div>
  )
}

export default LoaderNude;