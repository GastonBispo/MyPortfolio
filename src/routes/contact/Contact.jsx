import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import ContactGlass from '../../components/ContactGlass/ContactGlass';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import BgOrbLeft from '../../components/BgOrbLeft/BgOrbLeft';
import GenericSubtitle from '../../components/Generics/GenericSubtitle/GenericSubtitle';
import GenericHeader from '../../components/Generics/GenericHeader/GenericHeader';
import GenericParagraph from '../../components/Generics/GenericParagraph/GenericParagraph';
import SmokeSection from '../../components/Layout/SmokeSection/SmokeSection';

const Contact = () => {
  return (
    <> 
    <Helmet>
        <title> Contact | Advisor - Developer </title>
        <meta 
        name="description" 
        content="Contact and networks of Carlos Gaston Nunes Bispo. Contact for advice on private security or software development"/>
    </Helmet>
      <BgObscure>
        <BgOrbLeft/>
        <ContactGlass/>
        <SmokeSection>
          <GenericHeader headerText='Contact'/>
          <GenericSubtitle subtitleText="djjd uicn nsjud jgiej huw uer"/>
          <GenericParagraph paragraphText="Puedes encontrarme en los siguientes links"/>
        </SmokeSection>
      </BgObscure>
      <Footer/>
    </>
  )
}

export default Contact