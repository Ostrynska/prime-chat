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
       <MenuLink href="#about-us">About Us</MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink href="#platform">Platform</MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink href="#resources">Resources</MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink href="#solution">Solution</MenuLink>
      </MenuItem>
      <MenuItem>
       <MenuLink href="#pricing">Pricing</MenuLink>
      </MenuItem>
     </MenuList>
    </HeaderNav>
    <div
     style={{
      marginLeft: 'auto',
      display: 'flex',
     }}
    >
     <Button variant="secondary" text={'Login'} />
    </div>
   </HeaderWrap>
  </Container>
 );
};

export default Header;
