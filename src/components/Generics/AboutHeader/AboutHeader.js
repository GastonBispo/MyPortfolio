import React from 'react';
import './AboutHeader.css';
import GoBackButton from '../../Generics/GoBackButton/GoBackButton';
import { aparicionIzquierda } from '../VariantsFramer/AparicioIzquierda';
import { motion, AnimatePresence } from 'framer-motion';

const AboutHeader = (props) => {
  return (

      <AnimatePresence>
          <motion.div className='about-header__container'
          variants={aparicionIzquierda}
          initial='hidden'
          animate='visible'
          >
          <h1 className='about-header__header'>About</h1>
          {props.children}
          <GoBackButton/>
        </motion.div>
      </AnimatePresence>

    
  )
}

export default AboutHeader