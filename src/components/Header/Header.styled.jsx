import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const LogoLink = styled(NavLink)`
 display: flex;
 align-items: center;
`;

export const LogoText = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 30px;
 line-height: 1.3;
 color: ${mainVars.colors.headerColor};

 margin-left: 2px;
 @media screen and (min-width: 1920px) {
  margin-left: 10px;
  font-size: 40px;
 }
`;

export const HeaderWrap = styled.header`
 display: flex;
 align-items: flex-start;
 margin: 42px 0 60px 0;
 @media screen and (min-width: 1200px) {
  margin: 42px 0 81px 0;
  align-items: center;
  justify-content: stretch;
 }
 @media screen and (min-width: 1920px) {
  flex-wrap: wrap;
 }
`;

export const HeaderNav = styled.nav`
 display: flex;
 align-items: center;
 justify-content: center;

 @media screen and (min-width: 1200px) {
  flex-wrap: wrap;
`;

export const MenuItem = styled.li``;

export const MenuList = styled.ul`
 display: none;
 @media screen and (min-width: 1200px) {
  display: flex;
  list-style: none;
  gap: 25px;
  margin-left: 70px;
  gap: 30px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 263px;
  gap: 45px;
 }
`;

export const MenuLink = styled(Link)`
 text-decoration: none;
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 16px;
 line-height: 1.61;
 text-transform: capitalize;
 transition: ${mainVars.transitions.main};

 color: ${mainVars.colors.headerColor};
 &:hover {
  color: ${mainVars.colors.primaryColor};
  font-weight: 500;
 }
 @media screen and (min-width: 1920px) {
  font-size: 18px;
 }
`;

export const BtnWrap = styled.div`
 display: none;
 @media screen and (min-width: 1200px) {
  display: inline-block;
  margin-left: 48px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 115px;
 }
`;
