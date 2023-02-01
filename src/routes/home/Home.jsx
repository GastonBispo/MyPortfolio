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
          <title> home titulo</title>
          <meta name="description" content="palabras fundamentales orientadas a mi portfolio y nombre/marca personal"/>
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
//creo que hay que poner las propiedades framer dentro se la etiqueta apertura de cada componente ya que esta dentro de animatepresence
  )
}

export default Home