import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
// import Footer from '../../components/footer/Footer';
import ContactGlass from '../../components/Contact/ContactGlass';
import { motion, AnimatePresence } from 'framer-motion';


const Contact = () => {
  return (
    
    <AnimatePresence>
      <motion.div
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        // exit={{ y: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
        <>
          <BgObscure>
            <ContactGlass/>
          </BgObscure>
          {/* <Footer/> */}
        </>
      </motion.div>
    </AnimatePresence>
      
    
  )
}

export default Contact