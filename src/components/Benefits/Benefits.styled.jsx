import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const Section = styled.section`
 position: relative;
 padding-top: 25px;
 padding-bottom: 25px;
 @media screen and (min-width: 768px) {
  padding-top: 55px;
  padding-bottom: 55px;
 }
 @media screen and (min-width: 1200px) {
  padding-top: 100px;
  padding-bottom: 100px;
 }
 @media screen and (min-width: 1920px) {
  padding-top: 125px;
  padding-bottom: 125px;
 }
 ::before,
 ::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  background-color: #cecece;
  width: 290px;
  @media screen and (min-width: 480px) {
   width: 440px;
  }
  @media screen and (min-width: 768px) {
   width: 488px;
  }
  @media screen and (min-width: 1200px) {
   width: 956px;
  }
  @media screen and (min-width: 1920px) {
   width: 1400px;
  }
 }
 ::before {
  top: 0;
 }
 ::after {
  bottom: 0;
 }
`;
export const Content = styled.div`
 width: 632px;
 padding-top: 53px;
 padding-bottom: 53px;
`;

export const Title = styled.h2`
 margin-bottom: 18px;

 font-family: 'Open Sans', sans-serif;
 font-style: normal;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;

 text-transform: capitalize;
 text-align: center;
 color: ${mainVars.colors.headerColor};
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const Post = styled.p`
 margin: 0 auto;
 max-width: 829px;

 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 text-align: center;
 color: ${mainVars.colors.contentColor};
`;

export const AwardsList = styled.ul`
 margin-top: 60px;
 margin-bottom: 60px;

 display: flex;
 gap: 52px;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 @media screen and (min-width: 1200px) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px 80px;
  @media screen and (min-width: 1920px) {
   flex-wrap: nowrap;
   gap: 80px;
  }
 }
`;
export const AwardItem = styled.li``;

export const CustomerText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 25px;
 line-height: 160%;

 text-align: center;
 text-transform: capitalize;

 color: ${mainVars.colors.headerColor};
`;
