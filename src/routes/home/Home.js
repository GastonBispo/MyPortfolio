import BgNude from '../../components/BgNude/BgNude';
import NameDescription from '../../components/NameDescription/NameDescription';
import Nav from '../../components/menu/Nav';
import Footer from '../../components/footer/Footer';
import {Helmet} from 'react-helmet-async';
import BgOrb from '../../components/BgObscureOrb/BgOrb';

const Home = () => {
  return (
    <>
      <Helmet>
          <title> home titulo</title>
          <meta name="description" content="palabras fundamentales orientadas a mi portfolio y nombre/marca personal"/>
      </Helmet>
      <BgNude>
        <BgOrb position='left'/>
        <NameDescription />
        <Nav />
      </BgNude>   
      <Footer />
    </>
  )
}

export default Home