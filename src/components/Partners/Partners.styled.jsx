import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const PartnersSection = styled.section`
 padding-top: 20px;
 padding-bottom: 45px;
 @media screen and (min-width: 768px) {
  padding-top: 40px;
  padding-bottom: 75px;
 }
 @media screen and (min-width: 1200px) {
  padding-top: 80px;
  padding-bottom: 115px;
 }
 @media screen and (min-width: 1920px) {
  padding-top: 100px;
  padding-bottom: 135px;
 }
`;

export const PartnersWrap = styled.div`
 padding: 46px 54px;
 height: 100%;

 background: ${mainVars.colors.bgGrey};
 border-radius: 30px;
 @media screen and (min-width: 1920px) {
  padding: 126px 162px;
  height: 488px;
 }
`;

export const PartnersTitle = styled.h2`
 margin-bottom: 40px;
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 20px;
 line-height: 1.2;
 text-align: center;

 color: ${mainVars.colors.headerColor};
 @media screen and (min-width: 480px) {
  font-size: 23px;
 }
 @media screen and (min-width: 768px) {
  margin-bottom: 49px;
 }
 @media screen and (min-width: 1200px) {
  margin-bottom: 54px;
 }
 @media screen and (min-width: 1920px) {
  margin-bottom: 59px;
  font-size: 25px;
 }
`;

export const PartnersList = styled.ul`
 display: flex;
 flex-wrap: wrap;
 gap: 32px 80px;
 align-items: stretch;
 justify-content: center;
 @media screen and (min-width: 768px) {
  gap: 38px 84px;
 }
 @media screen and (min-width: 1200px) {
  gap: 40px 98px;
 }
 @media screen and (min-width: 1920px) {
  gap: 43px 116px;
 }
`;

export const PartnersItem = styled.li``;
