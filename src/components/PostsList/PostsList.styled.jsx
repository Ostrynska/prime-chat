import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { BsArrowRight } from 'react-icons/bs';

export const List = styled.ul`
 display: flex;
 flex-wrap: wrap;
 align-items: stretch;
 justify-content: center;
 gap: 40px;
 @media screen and (min-width: 1920px) {
  gap: 48px;
 }
`;

export const Item = styled.li`
 padding: 39px;
 width: 471px;
 height: 593px;

 background: ${mainVars.colors.platformColor};
 border: 1px solid ${mainVars.colors.borderPostColor};
 border-radius: 30px;
 @media screen and (min-width: 768px) {
  padding: 39px;
  width: 471px;
  height: 575px;
 }
 @media screen and (min-width: 1200px) {
  width: 460px;
  height: 605px;
 }
 @media screen and (min-width: 1920px) {
  padding: 47px 48px;
  width: 676px;
  height: 674px;
 }
`;

export const Image = styled.img`
 width: 100%;

 background: #a6a6a6;
 border-radius: 25px;
 @media screen and (min-width: 768px) {
  width: 390px;
 }
 @media screen and (min-width: 1200px) {
  width: 382px;
 }
 @media screen and (min-width: 1920px) {
  width: 580px;
  height: 353px;
 }
`;

export const ItemContent = styled.div`
 margin-top: 22px;
`;

export const ItemDate = styled.p`
 margin-bottom: 15px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
`;

export const ItemTitle = styled.h2`
 margin-bottom: 10px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;

export const ItemText = styled.p`
 margin-bottom: 15px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
`;

export const LinkText = styled.p`
 margin-right: 10px;

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const LinkContent = styled.div`
 display: flex;
 align-items: center;
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Arrow = styled(BsArrowRight)`
 color: ${mainVars.colors.headerColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;
