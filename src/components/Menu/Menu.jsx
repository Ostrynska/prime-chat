import { useState } from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { RxHamburgerMenu } from 'react-icons/rx';

import { Button } from '../Button/Button';
import {
 MenuLink,
 BurgerMenuStyles,
 BurgerMenuContainer,
 MenuList,
 MenuItem,
 IconCross,
} from './Menu.styled';

const BurgerMenu = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const handleStateChange = state => {
  setMenuOpen(state.isOpen);
 };

 const closeMenu = () => {
  setMenuOpen(false);
 };
 return (
  <BurgerMenuContainer>
   <Menu
    customBurgerIcon={<RxHamburgerMenu />}
    customCrossIcon={<IconCross />}
    right
    isOpen={menuOpen}
    onStateChange={state => handleStateChange(state)}
    styles={BurgerMenuStyles}
   >
    <MenuList>
     <MenuItem>
      <MenuLink
       onClick={() => closeMenu()}
       to="about-us"
       smooth={true}
       duration={500}
      >
       About Us
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink
       onClick={() => closeMenu()}
       to="platform"
       smooth={true}
       duration={500}
      >
       Platform
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink
       onClick={() => closeMenu()}
       to="resources"
       smooth={true}
       duration={500}
      >
       Resources
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink
       onClick={() => closeMenu()}
       to="solution"
       smooth={true}
       duration={500}
      >
       Solution
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink
       onClick={() => closeMenu()}
       to="pricing"
       smooth={true}
       duration={500}
      >
       Pricing
      </MenuLink>
     </MenuItem>
    </MenuList>
    <Button variant="secondary" text={'Login'} />
   </Menu>
  </BurgerMenuContainer>
 );
};

export default BurgerMenu;
