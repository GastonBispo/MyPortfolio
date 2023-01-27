import React from 'react';
import './BgOrbLeft.scss';
import { aparicionOrb } from '../Generics/VariantsFramer/AparicionOrb';
import { motion , AnimatePresence } from 'framer-motion';

const BgOrbLeft = () => {
  return (
    <AnimatePresence>
      <motion.div className='orb-left'
        variants={aparicionOrb}
        initial='hidden'
        animate='visible'
      >
      </motion.div>
    </AnimatePresence>
  )
}

export default BgOrbLeft