import React from 'react';
import BgObscure from '../../components/BgObscure/BgObscure';
import './about.css';
import Footer from '../../components/footer/Footer';
import Presentation from '../../components/Presentantion/Presentation';
import Glassmorphism from '../../components/Glassmorphism/Glassmorphism';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <>
    <BgObscure>
      <Presentation/>
        <Tilt
        tiltAngleYInitial={20} 
        tiltReverse={true} 
        glareEnable={true} 
        glareMaxOpacity={0.8} 
        glareColor="#ffffff" 
        glarePosition="top" 
        glareBorderRadius="15px">
        <Glassmorphism/>
        </Tilt>
    </BgObscure>
    <Footer/>
    </>
  )
}

export default About