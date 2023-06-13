import { NavLink } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

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
`;

export const HeaderNav = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;

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

export const MenuItem = styled.li`
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

export const Link = styled(HashLink)`
 text-decoration: none;
 transition: ${mainVars.transitions.main};

 color: ${mainVars.colors.headerColor};
 &:hover {
  color: ${mainVars.colors.primaryColor};
  font-weight: 500;
 }
`;

export const HeaderDecoration = styled.div`
 display: flex;
 position: relative;
`;

export const Image = styled.img`
 display: none;
 @media screen and (min-width: 1200px) {
  display: flex;
  z-index: -2;
  position: absolute;
  width: 393px;
  top: 151%;
  left: 99%;
  transform: translate(-50%, -50%);
 }
 @media screen and (min-width: 1920px) {
  width: 481px;
  top: 190%;
 }
`;
export const ImageL = styled.img`
 display: none;
 @media screen and (min-width: 1200px) {
  display: flex;
  z-index: -2;
  position: absolute;
  width: 422px;
  top: 440%;
  left: 101%;
  transform: translate(-50%, -50%);
 }
 @media screen and (min-width: 1920px) {
  width: 481px;
  top: 500%;
 }
`;
