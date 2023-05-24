import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { IoIosCheckmarkCircle } from 'react-icons/io';

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

export const AboutUsWrap = styled.div`
 display: flex;
 justify-content: center;
 @media screen and (min-width: 1920px) {
  gap: 20px;
 }
`;

export const Content = styled.div`
 width: 100%;
 padding-top: 53px;
 padding-bottom: 53px;
 @media screen and (min-width: 1200px) {
  width: 410px;
 }
 @media screen and (min-width: 1920px) {
  width: 632px;
 }
`;

export const Title = styled.h2`
 margin-bottom: 20px;
 width: 100%;

 font-family: 'Open Sans', sans-serif;
 font-style: normal;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
 @media screen and (min-width: 480px) {
  width: 440px;
 }
 @media screen and (min-width: 768px) {
  width: 455px;
 }
 @media screen and (min-width: 1200px) {
  width: 458px;
 }
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const Post = styled.p`
 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.contentColor};
 @media screen and (min-width: 480px) {
  width: 440px;
 }
 @media screen and (min-width: 768px) {
  width: 488px;
 }
 @media screen and (min-width: 1200px) {
  width: 100%;
 }
`;

export const PostWrap = styled.div`
 margin-bottom: 27px;
`;

export const List = styled.ul`
 margin-bottom: 62px;

 display: flex;
 flex-direction: column;
 gap: 17px;
`;

export const ListItem = styled.li`
 display: flex;
 align-items: center;
 padding: 10px 0 12px 13px;

 @media screen and (min-width: 480px) {
  padding: 12.5px 0 13.5px 15px;
  height: 54px;
 }

 ${p =>
  p.color &&
  `
    background: ${mainVars.colors[p.color]};
  `}
 border-radius: 44px;
`;

export const Check = styled(IoIosCheckmarkCircle)`
 margin-right: 12px;
 width: 28px;
 height: 28px;

 ${p =>
  p.color &&
  `
    color: ${mainVars.colors[p.color]};
  `}
`;

export const CheckText = styled.p`
 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 600;
 font-size: 12px;
 line-height: 160%;

 text-transform: capitalize;

 ${p =>
  p.color &&
  `
    color: ${mainVars.colors[p.color]};
  `}
 @media screen and (min-width: 480px) {
  font-size: 18px;
 }
`;

export const ImageWrap = styled.div`
 display: flex;
 @media screen and (min-width: 1200px) {
  margin-top: 24%;
  margin-bottom: 15%;
  width: 550px;
  height: 557px;
 }
 @media screen and (min-width: 1920px) {
  width: 902px;
  height: 909px;
  margin: 0;
 }
`;

export const Image = styled.img`
 display: none;
 @media screen and (min-width: 1200px) {
  display: inline-block;
 }
`;
