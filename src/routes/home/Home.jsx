import React from 'react';
import BgNude from '../../components/BgNude/BgNude';
import NameDescription from '../../components/NameDescription/NameDescription';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/footer/Footer';
import {Helmet} from 'react-helmet-async';
import BgOrbLeft from '../../components/BgOrbLeft/BgOrbLeft';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Helmet>
          <title> Home | Advisor - Developer </title>
          <meta 
          name="description" 
          content="Web portfolio presentation of Carlos Gaston Nunes Bispo, private security advisor and developer. Here you will find Private Security Consultancy and Software Development Dervices"/>
      </Helmet>
      <AnimatePresence>
        <motion.div
          initial={{ y: '33%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}>
          <BgNude>
            <BgOrbLeft/>
            <NameDescription/>
            <Nav/>
          </BgNude>   
        </motion.div>
      </AnimatePresence>
          <Footer />
    </>
  )
}

export default Home