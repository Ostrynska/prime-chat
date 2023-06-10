import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { ReactComponent as Arrow } from '../../images/header/arrow-header.svg';

export const Section = styled.div`
 padding-bottom: 85px;
 @media screen and (min-width: 768px) {
  padding-bottom: 100px;
 }
 @media screen and (min-width: 1200px) {
  padding-bottom: 150px;
 }
 @media screen and (min-width: 1920px) {
  padding-bottom: 160px;
 }
`;

export const Title = styled.h1`
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 60px;
 line-height: 133.2%;

 text-align: center;
 text-transform: capitalize;

 color: ${mainVars.colors.headerColor};
 span {
  font-weight: 700;
 }
`;

export const TitleWrapp = styled.div`
 position: relative;

 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const Image = styled(Arrow)`
 display: none;
 @media screen and (min-width: 768px) {
  display: flex;
  position: absolute;
  top: -144px;
  right: 22px;
  z-index: -3;
 }
 @media screen and (min-width: 1920px) {
  left: -96px;
 }
`;
