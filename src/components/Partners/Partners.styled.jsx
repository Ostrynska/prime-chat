import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const PartnersSection = styled.section`
 padding-top: 100px;
 padding-bottom: 135px;
`;

export const PartnersWrap = styled.div`
 padding: 46px 54px;
 ${'' /* width: 100%; */}
 height: 100%;

 background: ${lightTheme.colors.bgGrey};
 border-radius: 30px;
 ${
  '' /* @media screen and (min-width: 480px) {
 }
 @media screen and (min-width: 768px) {
 }
 @media screen and (min-width: 1200px) {
 } */
 }
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

 color: ${lightTheme.colors.headerColor};
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
