import React from 'react';
import './LeftSide.scss';
import { aparicionBlur } from '../../Generics/VariantsFramer/AparicionBlur';
import { motion, AnimatePresence } from 'framer-motion';

const LeftSide = (props) => {
  return (
    <AnimatePresence>
      <motion.div 
        className='left-side__container'
        variants={aparicionBlur}
        initial='hidden'
        animate='visible'
        >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}

export default LeftSide