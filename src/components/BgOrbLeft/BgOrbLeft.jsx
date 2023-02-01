import React from 'react';
import './BgOrbLeft.scss';
import { AparicionOrb } from '../Generics/VariantsFramer/AparicionOrb';
import { motion , AnimatePresence } from 'framer-motion';

const BgOrbLeft = () => {
  return (
    <AnimatePresence>
      <motion.div className='orb-left'
        variants={AparicionOrb}
        initial='hidden'
        animate='visible'
      >
      </motion.div>
    </AnimatePresence>
  )
}

export default BgOrbLeft