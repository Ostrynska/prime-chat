import { Routes, Route } from 'react-router-dom';

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
 const isRetina = window.devicePixelRatio > 1;

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
     <Routes>
      <Route
       path="/"
       element={
        <ImageL
         src={isRetina ? imageDesktopLRetina : imageDesktopL}
         alt="Header decoration"
        />
       }
      />
      <Route
       path="/blog"
       element={
        <Image
         src={isRetina ? imageDesktopRetina : imageDesktop}
         alt="Header decoration"
        />
       }
      />
      <Route path="*" />
     </Routes>
    </HeaderDecoration>
   </Container>
  </HeaderWrap>
 );
};

export default Header;
