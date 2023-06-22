import { useState } from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { RxHamburgerMenu } from 'react-icons/rx';

import { Button } from '../Button/Button';
import { ModalWindow } from '../Modal/Modal';

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
 const [showModal, setShowModal] = useState(false);

 const handleStateChange = state => {
  setMenuOpen(state.isOpen);
 };

 const closeMenu = () => {
  setMenuOpen(false);
 };

 const openModal = () => {
  setShowModal(true);
 };

 const closeModal = () => {
  setShowModal(false);
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
      <MenuLink onClick={() => closeMenu()} smooth to="/#about-us">
       About Us
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink onClick={() => closeMenu()} smooth to="/#platform">
       Platform
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink onClick={() => closeMenu()} smooth to="/#resources">
       Resources
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink onClick={() => closeMenu()} smooth to="/#solution">
       Solution
      </MenuLink>
     </MenuItem>
     <MenuItem>
      <MenuLink onClick={() => closeMenu()} smooth to="/#pricing">
       Pricing
      </MenuLink>
     </MenuItem>
    </MenuList>
    <div
     onClick={() => {
      closeMenu();
      openModal();
     }}
    >
     <Button variant="secondary" text={'Login'} />
    </div>
    {showModal && <ModalWindow onClose={closeModal} />}
   </Menu>
  </BurgerMenuContainer>
 );
};

export default BurgerMenu;
