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
 HeaderDecoration,
 Image,
 ImageL,
} from './Header.styled';

import imageDesktop from '../../images/header/bg-header@1x.png';
import imageDesktopRetina from '../../images/header/bg-header@2x.png';

import imageDesktopL from '../../images/header/bg-header-l@1x.png';
import imageDesktopLRetina from '../../images/header/bg-header-l@2x.png';

const Header = () => {
 const location = useLocation();
 const isRetina = window.devicePixelRatio > 1;
 const isBlogRoute = location.pathname.startsWith('/blog');
 const isBlogRouteStart = location.pathname.startsWith('/');

 return (
  <HeaderWrap id="home">
   <Container>
    <HeaderDecoration>
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
     {isBlogRoute && (
      <Image
       src={isRetina ? imageDesktopRetina : imageDesktop}
       alt="Header decoration"
      />
     )}
     {isBlogRouteStart && (
      <ImageL
       src={isRetina ? imageDesktopLRetina : imageDesktopL}
       alt="Header decoration"
      />
     )}
    </HeaderDecoration>
   </Container>
  </HeaderWrap>
 );
};

export default Header;
