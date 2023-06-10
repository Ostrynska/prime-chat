import { HashLink } from 'react-router-hash-link';
import { RxCross1 } from 'react-icons/rx';

import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const BurgerMenuStyles = {
 bmBurgerButton: {
  position: 'absolute',
  width: '26px',
  height: '18px',
  right: '33px',
  top: '23px',
 },
 bmCrossButton: {
  height: '26px',
  width: '18px',
  top: '-16px',
  right: '44px',
 },
 bmMenuWrap: {
  height: '100%',
  width: '100%',
 },
 bmMenu: {
  background: '#625FFB',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: '125px',
  marginTop: '0px',
  position: 'absolute',
  top: '-80px',
  width: '100%',
 },
 bmOverlay: {
  background: 'rgba(0, 0, 0, 0.3)',
 },
};

export const IconCross = styled(RxCross1)`
 color: ${mainVars.colors.bgGrey};
`;

export const BurgerMenuContainer = styled.div`
 display: none;
 @media (max-width: 1199px) {
  display: flex;
  align-items: center;
  justify-content: center;
 }
`;

export const MenuList = styled.ul`
 margin-bottom: 65px;
`;

export const MenuItem = styled.li`
 &:not(:last-child) {
  margin-bottom: 33px;
 }
`;

export const MenuLink = styled(HashLink)`
 text-decoration: none;
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 18px;
 line-height: 1.61;
 text-transform: capitalize;
 transition: ${mainVars.transitions.main};

 color: ${mainVars.colors.whiteColor};
 &:hover {
  color: ${mainVars.colors.secondaryColor};
  font-weight: 500;
 }
`;
