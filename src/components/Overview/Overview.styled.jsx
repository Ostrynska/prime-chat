import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const Section = styled.section`
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
`;

export const TitleContent = styled.div`
 display: flex;
 flex-direction: column;
 @media screen and (min-width: 1200px) {
  flex-direction: row;
 }
`;
export const Content = styled.div``;

export const Title = styled.h2`
 max-width: 310px;

 font-family: 'Open Sans', sans-serif;
 font-style: normal;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
 @media screen and (min-width: 480px) {
  max-width: 408px;
 }
 @media screen and (min-width: 1200px) {
  width: 446px;
 }
 @media screen and (min-width: 1920px) {
  width: 466px;
 }
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const PostTitle = styled.div`
 margin-top: 30px;
 display: flex;
 align-items: center;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
 @media screen and (min-width: 1200px) {
  margin-left: 177px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 348px;
 }
`;

export const Platform = styled.ul`
 margin-top: 48px;
 @media screen and (min-width: 1200px) {
  max-width: 960px;
  display: grid;
  grid-template-columns: 544px 382px;
  gap: 36px;
 }
 @media screen and (min-width: 1920px) {
  max-width: 1400px;
  display: grid;
  grid-template-columns: 920px 442px;
  gap: 36px;
 }
`;

export const PlatformRvs = styled.ul`
 margin-top: 32px;
 @media screen and (min-width: 1200px) {
  max-width: 960px;
  display: grid;
  grid-template-columns: 382px 544px;
  gap: 36px;
 }
 @media screen and (min-width: 1920px) {
  max-width: 1400px;
  display: grid;
  grid-template-columns: 442px 920px;
  gap: 36px;
 }
`;
export const PlatformItem = styled.li`
 margin-bottom: 36px;

 position: relative;
 background: ${mainVars.colors.platformColor};
 padding: 55px 30px;
 border-radius: 30px;
 @media screen and (min-width: 1200px) {
  margin-bottom: 0;
 }
 @media screen and (min-width: 1920px) {
  padding: 55px 44px 75px 44px;
 }
`;

export const AltText = styled.div`
 position: absolute;
 top: 95px;
 left: 85px;

 background: ${mainVars.colors.opacityGreyColor};
 border: 1px solid ${mainVars.colors.borderLightColor};
 backdrop-filter: blur(5px);
 border-radius: 10px;
 padding: 12px 16px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 133.2%;

 color: ${mainVars.colors.primaryColor};
`;

export const PlatformTitle = styled.h3`
 margin-top: 53px;
 margin-bottom: 10px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;

export const PlatformText = styled.p`
 max-width: 422px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
`;
export const MessengerImage = styled.img`
 display: none;
 @media screen and (min-width: 1920px) {
  display: inline-block;
  position: absolute;
  top: 0px;
  left: -1px;
 }
`;

export const AppImage = styled.img`
 display: none;
 @media screen and (min-width: 1920px) {
  display: inline-block;
  width: 920px;
  height: 409px;
  position: absolute;
  top: -5px;
  left: 0px;
 }
`;
