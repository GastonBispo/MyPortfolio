import React from 'react';
import './BgOrb.scss';
import { aparicionOrb } from '../Generics/VariantsFramer/AparicionOrb';
import { motion , AnimatePresence } from 'framer-motion';

const BgOrb = ({ position = "right" }) => {
  return (
    <AnimatePresence>
      <motion.div className={`orb ${position}`}
        variants={aparicionOrb}
        initial='hidden'
        animate='visible'
      >
      </motion.div>
    </AnimatePresence>
  )
}

export default BgOrb