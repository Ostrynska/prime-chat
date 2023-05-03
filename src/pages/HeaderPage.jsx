import { Container } from '../components/Container/Conteiner';

import { MenuItem } from './Hero.styled';

const HeaderPage = () => {
 return (
  <Container>
   <header>
    <nav>
     <div></div>
     <ul>
      <MenuItem>
       <a href="#about-us">About Us</a>
      </MenuItem>
      <MenuItem>
       <a href="#platform">Platform</a>
      </MenuItem>
      <MenuItem>
       <a href="#resources">Resources</a>
      </MenuItem>
      <MenuItem>
       <a href="#solution">Solution</a>
      </MenuItem>
      <MenuItem>
       <a href="#pricing">Pricing</a>
      </MenuItem>
     </ul>
     <button>Logout</button>
    </nav>
   </header>
  </Container>
 );
};

export default HeaderPage;
