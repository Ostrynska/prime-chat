import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const Wrapper = styled.div`
 margin-bottom: 56px;
 position: 'relative';
`;
export const Section = styled.section`
 position: relative;
 padding-top: 45px;
 padding-bottom: 45px;
 @media screen and (min-width: 768px) {
  padding-top: 75px;
  padding-bottom: 75px;
 }
 @media screen and (min-width: 1200px) {
  padding-top: 115px;
  padding-bottom: 115px;
 }
 @media screen and (min-width: 1920px) {
  padding-top: 135px;
  padding-bottom: 135px;
 }
 ::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  background-color: ${mainVars.colors.lineColor};
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
 ::after {
  bottom: 0;
 }
`;

export const Title = styled.h2`
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 60px;
 line-height: 1.33;
 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;

export const SpanTitle = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 color: ${mainVars.colors.headerColor};
`;

export const Item = styled.div`
 padding: 53px 28px;
 max-width: 100%;
 background: ${mainVars.colors.platformColor};
 border-radius: 30px;
 @media screen and (min-width: 768px) {
  padding: 53px 48px;
 }
 @media screen and (min-width: 1200px) {
  padding: 53px 68px;
  max-width: 668px;
 }
`;

export const Comment = styled.div`
 margin-top: 19px;
 padding-top: 27px;
 max-width: 100%;
 border-top: 1px solid ${mainVars.colors.commentLineColor};

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
 @media screen and (min-width: 1920px) {
  max-width: 613px;
 }
`;

export const TitleWrap = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 @media screen and (min-width: 1200px) {
  flex-direction: row;
 }
`;

export const User = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

 @media screen and (min-width: 1200px) {
  margin-left: 20px;
  align-items: flex-start;
  justify-content: center;
 }
`;

export const UserName = styled.h3`
 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;

export const UserPosition = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 18px;
 line-height: 160%;

 text-transform: capitalize;
 color: ${mainVars.colors.primaryColor};
`;

export const CompanyLogo = styled.img`
 margin-top: 10px;
 @media screen and (min-width: 1200px) {
  margin-top: 0px;
  margin-left: auto;
 }
`;

export const UserPic = styled.img`
 border-radius: 50%;
`;
