import React from 'react';
import Footer from '../../components/footer/Footer';
import HeroImg from '../../components/heroImg/HeroImg';
import NameDescription from '../../components/NameDescription/NameDescription';
import Nav from '../../components/menu/Nav';

const Home = () => {
  return (
    <div>
      <HeroImg>
        <NameDescription/>
        <Nav/>
      </HeroImg>
      <Footer/>
    </div>
  )
}

export default Home