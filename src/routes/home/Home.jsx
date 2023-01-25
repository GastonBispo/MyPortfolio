import BgNude from '../../components/BgNude/BgNude';
import NameDescription from '../../components/NameDescription/NameDescription';
import Nav from '../../components/menu/Nav';
import Footer from '../../components/footer/Footer';
import {Helmet} from 'react-helmet-async';
import BgOrbLeft from '../../components/BgOrbLeft/BgOrbLeft';
import RightSide from '../../components/Layout/Right-side/RightSide';

const Home = () => {
  return (
    <>
      <Helmet>
          <title> home titulo</title>
          <meta name="description" content="palabras fundamentales orientadas a mi portfolio y nombre/marca personal"/>
      </Helmet>
      <BgNude>
        <BgOrbLeft/>
        <NameDescription/>
        <RightSide>
          <Nav/>
        </RightSide>
      </BgNude>   
      <Footer />
    </>
  )
}

export default Home