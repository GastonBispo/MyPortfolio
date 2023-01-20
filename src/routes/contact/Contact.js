import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import ContactGlass from '../../components/Contact/ContactGlass';
import HeaderAndButton from '../../components/Generics/GenericHeader/Header&Button';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import BgOrbLeft from '../../components/BgOrbLeft/BgOrbLeft';

const Contact = () => {
  return (
    <>
    <Helmet>
        <title> contac titulo</title>
        <meta name="description" content="palabras clave referentes a contact ver redes sociales"/>
    </Helmet>
      <BgObscure>
        <BgOrbLeft/>
        <ContactGlass/>
        <HeaderAndButton headerText='Contact'/>
      </BgObscure>
      <Footer/>
    </>
  )
}

export default Contact