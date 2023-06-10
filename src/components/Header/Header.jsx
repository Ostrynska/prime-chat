import { useLocation } from 'react-router-dom';

import { Container } from '../Container/Conteiner';
import { Button } from '../Button/Button';

import BurgerMenu from '../Menu/Menu';
import { ReactComponent as Logo } from '../../images/logo.svg';

import {
 LogoLink,
 LogoText,
 HeaderWrap,
 HeaderNav,
 MenuList,
 MenuItem,
 BtnWrap,
 Link,
} from './Header.styled';

const Header = () => {
 const location = useLocation();

 const isBlogRoute = location.pathname.startsWith('/blog');

 return (
  <HeaderWrap id="home">
   <Container>
    {isBlogRoute ? (
     <>
      <HeaderNav>
       <LogoLink to={'/'}>
        <Logo />
        <LogoText>PrimeBlog</LogoText>
       </LogoLink>
       <MenuList>
        <MenuItem>
         <Link smooth to="/#about-us">
          About Us
         </Link>
        </MenuItem>
        <MenuItem>
         <Link smooth to="/#platform">
          Platform
         </Link>
        </MenuItem>
        <MenuItem>
         <Link smooth to="/#resources">
          Resources
         </Link>
        </MenuItem>
        <MenuItem>
         <Link smooth to="/#solution">
          Solution
         </Link>
        </MenuItem>
        <MenuItem>
         <Link smooth to="/#pricing">
          Pricing
         </Link>
        </MenuItem>
       </MenuList>
      </HeaderNav>
      <BtnWrap>
       <Button variant="secondary" text={'Login'} />
      </BtnWrap>
      <BurgerMenu />
     </>
    ) : (
     <>
      <HeaderNav>
       <LogoLink to={'/'}>
        <Logo />
        <LogoText>PrimeChat</LogoText>
       </LogoLink>
       <MenuList>
        <MenuItem>
         <Link smooth to="/#about-us">
          About Us
         </Link>
        </MenuItem>
        <MenuItem>
         <Link smooth to="/#platform">
          Platform
         </Link>
        </MenuItem>
        <MenuItem>
         <Link smooth to="/#resources">
          Resources
         </Link>
        </MenuItem>
        <MenuItem>
         <Link smooth to="/#solution">
          Solution
         </Link>
        </MenuItem>
        <MenuItem>
         <Link smooth to="/#pricing">
          Pricing
         </Link>
        </MenuItem>
       </MenuList>
      </HeaderNav>
      <BtnWrap>
       <Button variant="secondary" text={'Login'} />
      </BtnWrap>
      <BurgerMenu />
     </>
    )}
   </Container>
  </HeaderWrap>
 );
};

export default Header;
