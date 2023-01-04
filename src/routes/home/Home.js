// import React, { useState } from 'react';
// import Loader from '../../components/Loader/Loader';
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
      <Footer />
    </>
  )
}

export default Home