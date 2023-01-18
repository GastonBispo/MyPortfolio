import React from 'react';
import './Presentation.scss';
import AboutSubtitle from '../../Generics/AboutSubtitle/AboutSubtitle';
import AboutHeader from '../../Generics/GenericHeader/Header&Button';
import AboutParagraph from '../../Generics/AboutParagraph/AboutParagraph';
import { aparicionBlur } from '../../Generics/VariantsFramer/AparicionBlur';
import { motion, AnimatePresence } from 'framer-motion';

const Presentation = () => {
  return (
    <AnimatePresence>
      <motion.div className='presentation__container'
        variants={aparicionBlur}
        initial='hidden'
        animate='visible'
        >
        <AboutHeader headerText='About'/>
        <AboutSubtitle/>
        <AboutParagraph/>
      </motion.div>
    </AnimatePresence>
      
        

    
  )
}

export default Presentation