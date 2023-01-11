import BgNude from '../../components/BgNude/BgNude';
import NameDescription from '../../components/NameDescription/NameDescription';
import Nav from '../../components/menu/Nav';
import Footer from '../../components/footer/Footer';
import {Helmet} from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
          <title> home titulo</title>
          <meta name="description" content="palabras fundamentales orientadas a mi portfolio y nombre/marca personal"/>
      </Helmet>
      <BgNude>
        <NameDescription />
        <Nav />
      </BgNude>   
      <Footer />
    </>
  )
}

export default Home