import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import Presentation from '../../components/Layout/Presentation/Presentation';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import {Helmet} from 'react-helmet-async';

const About = () => {
  return (
      <>
      <Helmet> 
        <title> about titulo</title>
        <meta name="description" content="aqui debo describir my about"/>
      </Helmet> 
      {/* convertir content en una funcion      */}
      <BgObscure>
        <Presentation/>
        <ProfileCard/>
      </BgObscure>
      </>
  )
}

export default About