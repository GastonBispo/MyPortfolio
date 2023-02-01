import React from 'react';
import './BgOrbRight.scss';
import { AparicionOrb } from '../Generics/VariantsFramer/AparicionOrb';
import { motion , AnimatePresence } from 'framer-motion';

const BgOrbRight = () => {
  return (
    <AnimatePresence>
      <motion.div className='orb-right'
        variants={AparicionOrb}
        initial='hidden'
        animate='visible'
      >
      </motion.div>
    </AnimatePresence>
  )
}

export default BgOrbRight