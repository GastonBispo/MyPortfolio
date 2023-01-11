import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import ContactGlass from '../../components/Contact/ContactGlass';
import HeaderAndButton from '../../components/Generics/GenericHeader/Header&Button';
import {Helmet} from 'react-helmet-async';

const Contact = () => {
  return (
    <>
    <Helmet>
        <title> contac titulo</title>
        <meta name="description" content="palabras clave referentes a contact ver redes sociales"/>
    </Helmet>
      <BgObscure>
        <ContactGlass/>
        <HeaderAndButton headerText='Contact'/>
      </BgObscure>
    </>
  )
}

export default Contact