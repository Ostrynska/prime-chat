import { Container } from '../Container/Conteiner';
import { Button } from '../Button/Button';

import { ReactComponent as Logo } from '../../images/logo.svg';

import {
 LogoLink,
 LogoText,
 HeaderWrap,
 HeaderNav,
 MenuList,
 MenuItem,
 MenuLink,
} from './Header.styled';

const Header = () => {
 return (
  <Container>
   <HeaderWrap>
    <HeaderNav>
     <LogoLink href="#home">
      <Logo />
      <LogoText>PrimeChat</LogoText>
     </LogoLink>
     <MenuList>
      <MenuItem>
       <MenuLink to="about-us" smooth={true} duration={500}>
        About Us
       </MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink to="platform" smooth={true} duration={500}>
        Platform
       </MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink to="resources" smooth={true} duration={500}>
        Resources
       </MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink to="solution" smooth={true} duration={500}>
        Solution
       </MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink to="pricing" smooth={true} duration={500}>
        Pricing
       </MenuLink>
      </MenuItem>
     </MenuList>
    </HeaderNav>
    <div
     style={{
      marginLeft: '115px',
     }}
    >
     <Button variant="secondary" text={'Login'} />
    </div>
   </HeaderWrap>
  </Container>
 );
};

export default Header;
