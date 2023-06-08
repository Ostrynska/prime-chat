import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { BsArrowRight } from 'react-icons/bs';

// export const PartnersSection = styled.section`
//  padding-top: 20px;
//  padding-bottom: 45px;
//  @media screen and (min-width: 768px) {
//   padding-top: 40px;
//   padding-bottom: 75px;
//  }
//  @media screen and (min-width: 1200px) {
//   padding-top: 80px;
//   padding-bottom: 115px;
//  }
//  @media screen and (min-width: 1920px) {
//   padding-top: 100px;
//   padding-bottom: 135px;
//  }
// `;

export const List = styled.ul`
 display: flex;
 flex-wrap: wrap;
 align-items: stretch;
 justify-content: center;
 @media screen and (min-width: 768px) {
 }
 @media screen and (min-width: 1200px) {
 }
 @media screen and (min-width: 1920px) {
  gap: 48px;
 }
`;

export const Item = styled.li`
 padding: 47px 48px;

 width: 676px;
 height: 674px;

 background: ${mainVars.colors.platformColor};
 border: 1px solid ${mainVars.colors.borderPostColor};
 border-radius: 30px;
`;

export const Image = styled.img`
 width: 580px;
 height: 353px;

 background: #a6a6a6;
 border-radius: 25px;
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
