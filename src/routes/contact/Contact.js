import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import ContactGlass from '../../components/Contact/ContactGlass';
import HeaderAndButton from '../../components/Generics/GenericHeader/Header&Button';

const Contact = () => {
  return (
    <>
      <BgObscure>
        <ContactGlass/>
        <HeaderAndButton headerText='Contact'/>
      </BgObscure>
    </>
  )
}

export default Contact