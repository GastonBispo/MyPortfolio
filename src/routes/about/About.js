import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import Footer from '../../components/footer/Footer';
import Presentation from '../../components/Presentantion/Presentation';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const About = () => {
  return (
    <>
    <BgObscure height="100%">
      <Presentation/>
      <ProfileCard/>
    </BgObscure>
    <Footer/>
    </>
  )
}

export default About