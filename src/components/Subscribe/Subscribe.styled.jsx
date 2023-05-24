import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import bgSubscribe from '../../images/subscribe/bgSubscribe@1x.png';
import bgSubscribeRetina from '../../images/subscribe/bgSubscribe@2x.png';

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

export const TitleContent = styled.div`
 background-image: url(${bgSubscribe});
 background-repeat: no-repeat;
 height: 361px;
 @media screen and (min-device-pixel-ratio: 2),
  screen and (min-resolution: 192dpi),
  (-webkit-min-device-pixel-ratio: 2),
  screen and (min-resolution: 2dppx) {
  background-image: url(${bgSubscribeRetina});
 }
    padding: 23px 34px;
 width: 100%;
  @media screen and (min-width: 380px) {
    padding: 50px 34px;
 }
 @media screen and (min-width: 480px) {
    59px 53px;
 }
 @media screen and (min-width: 768px) {
  padding: 51px 46px;
  width: 488px;
 }
 @media screen and (min-width: 1200px) {
  padding: 128px 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 964px;
 }
 @media screen and (min-width: 1920px) {
  width: 1399px;
 }
`;

export const Title = styled.h2`
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.whiteColor};
 margin-bottom: 15px;
 text-align: center;
 @media screen and (min-width: 380px) {
  text-align: start;
 }
 @media screen and (min-width: 768px) {
  width: 100%;
  font-size: 28px;
  margin-bottom: 25px;
 }
 @media screen and (min-width: 1200px) {
  width: 558px;
  font-size: 40px;
  margin-bottom: 0;
 }
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const Form = styled.form`
 margin: 0 auto;
`;

export const Input = styled.input`
 background: ${mainVars.colors.darkGreyColor};
 border-radius: 72px;
 padding: 27px 37px;

 width: 100%;
 margin-bottom: 8px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textInputColor};
 transition: ${mainVars.transitions.main};

 @media screen and (min-width: 1200px) {
  width: 368px;
  margin-right: 8px;
 }
 @media screen and (min-width: 1920px) {
  margin-right: 12px;
 }
 &:hover,
 &:focus {
  border: 1px solid ${mainVars.colors.secondaryColor};
  color: ${mainVars.colors.whiteColor};
 }
`;

export const Button = styled.button`
 text-align: center;
 padding: 28px 49px 29px;
 width: 168px;

 background: ${mainVars.colors.bgColor};
 border-radius: 72px;

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;

 text-transform: uppercase;
 color: #303030;
 &:hover {
  color: #ffffff;
  background-color: ${mainVars.colors.secondaryColor};
 }
`;
