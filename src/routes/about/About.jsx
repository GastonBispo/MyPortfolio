import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import {Helmet} from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import BgOrbRight from '../../components/BgOrbRight/BgOrbRight';
import HeaderAndButton from '../../components/Generics/GenericHeader/Header&Button';
import GenericSubtitle from '../../components/Generics/GenericSubtitle/GenericSubtitle';
import LeftSide from '../../components/Layout/Left-side/LeftSide';

const About = () => {
  return (
      <>
      <Helmet> 
        <title> about titulo</title>
        <meta name="description" content="aqui debo describir my about"/>
      </Helmet> 
      {/* convertir meta content en una funcion      */}
      <BgObscure>
        <BgOrbRight/>
          <LeftSide>
            <HeaderAndButton headerText='About'/>
            <GenericSubtitle subtitleText="Let's talk about me"/>
          </LeftSide>
          <ProfileCard/>
        </BgObscure>
      <Footer/>
      </>
  )
}

export default About