import Hero from '../components/Hero/Hero';
import Partners from '../components/Partners/Partners';
import AboutUs from '../components/AboutUs/AboutUs';
import Benefits from '../components/Benefits/Benefits';
import Overview from '../components/Overview/Overview';
import { Container } from '../components/Container/Conteiner';

const HomePage = () => {
 return (
  <Container>
   <Hero />
   <Partners />
   <AboutUs />
   <Benefits />
   <Overview />
  </Container>
 );
};

export default HomePage;