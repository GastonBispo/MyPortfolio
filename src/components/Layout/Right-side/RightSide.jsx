import React from 'react';
import './RightSide.scss';
import { aparicionBlur } from '../../Generics/VariantsFramer/AparicionBlur';
import { motion, AnimatePresence } from 'framer-motion';

const RightSide = (props) => {
  return (
    <AnimatePresence>
      <motion.div 
        className='right-side__container'
        variants={aparicionBlur}
        initial='hidden'
        animate='visible'
        >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}

export default RightSide