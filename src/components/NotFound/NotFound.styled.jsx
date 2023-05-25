import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const Section = styled.section`
 padding-bottom: 45px;
 @media screen and (min-width: 768px) {
  padding-bottom: 75px;
 }
 @media screen and (min-width: 1200px) {
  padding-bottom: 115px;
 }
 @media screen and (min-width: 1920px) {
  padding-bottom: 135px;
 }
`;
export const Wrapper = styled.div`
 text-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

export const Text = styled.p`
 margin-top: 15px;
 margin-bottom: 35px;
 width: 100%;

 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 text-align: center;
 color: ${mainVars.colors.textColor};
 @media screen and (min-width: 1200px) {
  width: 374px;
 }
`;

export const Image = styled.img`
 width: 262px;
 height: 177px;
 @media screen and (min-width: 480px) {
  width: 365px;
  height: 211px;
 }
 @media screen and (min-width: 768px) {
  width: 365px;
  height: 211px;
 }
 @media screen and (min-width: 1200px) {
  width: 417.68px;
  height: 234.17px;
 }
 @media screen and (min-width: 1920px) {
  width: 517.68px;
  height: 320.17px;
 }
`;
