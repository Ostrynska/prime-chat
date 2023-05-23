import { Link } from 'react-scroll';
import { RxCross1 } from 'react-icons/rx';

import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const BurgerMenuStyles = {
 bmBurgerButton: {
  position: 'absolute',
  width: '24px',
  height: '16px',
  right: '33px',
  top: '61px',
 },
 bmCrossButton: {
  height: '14px',
  width: '14px',
  top: '32px',
  right: '32px',
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
  paddingTop: '184px',
  marginTop: '0px',
  position: 'absolute',
  top: '-43px',
  width: '100%',
 },
 bmOverlay: {
  background: 'rgba(0, 0, 0, 0.3)',
 },
};

export const IconCross = styled(RxCross1)`
 color: #ececec;
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

export const MenuLink = styled(Link)`
 text-decoration: none;
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 18px;
 line-height: 1.61;
 text-transform: capitalize;
 transition: ${lightTheme.transitions.main};

 color: ${lightTheme.colors.whiteColor};
 &:hover {
  color: ${lightTheme.colors.secondaryColor};
  font-weight: 500;
 }
`;