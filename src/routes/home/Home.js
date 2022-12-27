import React from 'react';
import BgNude from '../../components/BgNude/BgNude';
import NameDescription from '../../components/NameDescription/NameDescription';
import Nav from '../../components/menu/Nav';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <BgNude>
        <NameDescription />
        <Nav />
      </BgNude>
      <Footer/>
    </>
  )
}

export default Home