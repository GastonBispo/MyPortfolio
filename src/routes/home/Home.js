import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import BgNude from '../../components/BgNude/BgNude';
import NameDescription from '../../components/NameDescription/NameDescription';
import Nav from '../../components/menu/Nav';
import Footer from '../../components/footer/Footer';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000); 

  return (
    <>
      {isLoading ? <Loader /> :
        <BgNude>
          <NameDescription />
          <Nav />
        </BgNude>
      }
      <Footer />
    </>
  )
}

export default Home