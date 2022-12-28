import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import './about.css';
import Footer from '../../components/footer/Footer';
import Presentation from '../../components/Presentantion/Presentation';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const About = () => {
  return (
    <>
    <BgObscure>
      <Presentation/>
      <ProfileCard/>
    </BgObscure>
    <Footer/>
    </>
  )
}

export default About