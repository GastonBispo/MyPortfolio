import React from 'react';
import './SmokeSection.scss';
import { aparicionBlur } from '../../Generics/VariantsFramer/AparicionBlur';
import { motion, AnimatePresence } from 'framer-motion';

const SmokeSection = (props) => {
  return (
    <AnimatePresence>
      <motion.div 
        className='smoke-section__container'
        variants={aparicionBlur}
        initial='hidden'
        animate='visible'
        >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}

export default SmokeSection