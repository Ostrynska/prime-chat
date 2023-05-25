import { Container } from '../Container/Conteiner';
import { Button } from '../Button/Button';

import BurgerMenu from '../Menu/Menu';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-scroll';
import {
 LogoLink,
 LogoText,
 HeaderWrap,
 HeaderNav,
 MenuList,
 MenuItem,
 MenuLink,
 BtnWrap,
} from './Header.styled';

const Header = () => {
 return (
  <Container>
   <HeaderWrap>
    <HeaderNav>
     <LogoLink to={'/'}>
      <Logo />
      <LogoText>PrimeChat</LogoText>
     </LogoLink>
     <MenuList>
      <MenuItem>
       <Link to="about-us" smooth={true} duration={500}>
        About Us
       </Link>
      </MenuItem>
      <MenuItem>
       <Link to="platform" smooth={true} duration={500}>
        Platform
       </Link>
      </MenuItem>
      <MenuItem>
       <Link to="resources" smooth={true} duration={500}>
        Resources
       </Link>
      </MenuItem>
      <MenuItem>
       <Link to="solution" smooth={true} duration={500}>
        Solution
       </Link>
      </MenuItem>
      <MenuItem>
       <Link to="pricing" smooth={true} duration={500}>
        Pricing
       </Link>
      </MenuItem>
     </MenuList>
    </HeaderNav>
    <BtnWrap>
     <Button variant="secondary" text={'Login'} />
    </BtnWrap>
    <BurgerMenu />
   </HeaderWrap>
  </Container>
 );
};

export default Header;
