import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { IoIosCheckmarkCircle } from 'react-icons/io';

import integrationDesktop from '../../images/integration/bgPatternDesktop@1x.png';
import integrationDesktopRetina from '../../images/integration/bgPatternDesktop@2x.png';

export const Section = styled.section`
 background: ${mainVars.colors.primaryColor};
 background-image: url(${integrationDesktop});
 background-size: cover;
 background-repeat: no-repeat;
 width: 100%;
 z-index: -1;
 padding-top: 65px;
 padding-bottom: 65px;
 @media screen and (min-device-pixel-ratio: 2),
  screen and (min-resolution: 192dpi),
  (-webkit-min-device-pixel-ratio: 2),
  screen and (min-resolution: 2dppx) {
  background-image: url(${integrationDesktopRetina});
 }
 @media screen and (min-width: 768px) {
  padding-top: 95px;
  padding-bottom: 95px;
 }
 @media screen and (min-width: 1200px) {
  padding-top: 145px;
  padding-bottom: 145px;
 }
 @media screen and (min-width: 1920px) {
  padding-top: 165px;
  padding-bottom: 165px;
 }
`;
export const Container = styled.div`
 text-align: center;
 margin-left: auto;
 margin-right: auto;
 width: 100%;

 @media screen and (min-width: 480px) {
  width: 480px;
 }
 @media screen and (min-width: 768px) {
  width: 768px;
 }
 @media screen and (min-width: 1200px) {
  width: 1200px;
 }
 @media screen and (min-width: 1920px) {
  width: 1920px;
 }
`;

export const Title = styled.h2`
 margin: 0 auto;
 margin-bottom: 45px;
 max-width: 571px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;

 text-align: center;
 text-transform: capitalize;

 color: ${mainVars.colors.whiteColor};
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const Text = styled.p`
 margin: auto;
 margin-top: 45px;
 margin-bottom: 56px;
 max-width: 100%;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 text-align: center;
 color: ${mainVars.colors.whiteColor};
 @media screen and (min-width: 1200px) {
  max-width: 927px;
 }
`;

export const List = styled.ul`
 display: flex;
 flex-direction: column;
 gap: 20px;

 @media screen and (min-width: 768px) {
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
 }
 @media screen and (min-width: 947px) {
  gap: 30px;
 }
 @media screen and (min-width: 1200px) {
  gap: 80px;
 }
`;

export const ListItem = styled.li`
 display: flex;
 padding: 12.5px 0 13.5px 15px;

 height: 54px;
 background: linear-gradient(89.88deg, #7573ff 1.51%, #625ffb 84.54%);

 border-radius: 44px;
`;

export const Check = styled(IoIosCheckmarkCircle)`
 margin-right: 10px;
 width: 28px;
 height: 28px;

 color: ${mainVars.colors.whiteColor};
 @media screen and (min-width: 1200px) {
  margin-right: 12px;
 }
`;

export const CheckText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 14px;
 line-height: 160%;

 text-transform: uppercase;
 color: ${mainVars.colors.whiteColor};
 @media screen and (min-width: 1200px) {
  font-size: 18px;
 }
`;

export const Image = styled.img`
 width: 310px;
 @media screen and (min-width: 480px) {
  width: 460px;
 }
 @media screen and (min-width: 768px) {
  width: 760px;
 }
 @media screen and (min-width: 1200px) {
  width: 1038px;
 }
 @media screen and (min-width: 1920px) {
  width: 1238px;
 }
`;
