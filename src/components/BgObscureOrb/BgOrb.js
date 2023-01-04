import React from 'react';
import './BgOrb.css';
import { aparicionOrb } from '../Generics/VariantsFramer/AparicionOrb';
import { motion , AnimatePresence } from 'framer-motion';

const BgOrb = () => {
  return (

        <AnimatePresence>
          <motion.div className='orbSmall'
          variants={aparicionOrb}
          initial='hidden'
          animate='visible'
          >
          </motion.div>
        </AnimatePresence>

    
  )
}

export default BgOrb