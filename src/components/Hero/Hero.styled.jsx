import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mainVars } from '../../utils/theme';

import arrowDesktop from '../../images/home-arrow.svg';

export const Container = styled.div`
 margin-left: auto;
 margin-right: auto;
 min-width: 320px;
 padding-left: 15px;
 padding-right: 15px;
 @media screen and (min-width: 480px) {
  padding: 0 20px;
  width: 480px;
 }
 @media screen and (min-width: 768px) {
  padding-left: 140px;
  padding-right: 140px;
  width: 768px;
 }
 @media screen and (min-width: 1200px) {
  min-width: 1250px;
 }
 @media screen and (min-width: 1920px) {
  min-width: 1522px;
  padding-left: 0px;
  padding-right: 0px;
 }
`;

export const Wrapper = styled.div`
 @media screen and (min-width: 1200px) {
  width: 544px;
  display: inline-block;
 }
 @media screen and (min-width: 1920px) {
  width: 710px;
 }
`;
export const ImagesWrap = styled.div`
 display: none;
 @media screen and (min-width: 1200px) {
  display: flex;
  height: 547px;
  width: 377px;
  z-index: 4;
 }
 @media screen and (min-width: 1920px) {
  height: 631px;
  width: 645px;
 }
`;

export const Image = styled.img`
 @media screen and (min-width: 1200px) {
  width: 500px;
  height: 420px;
 }
 @media screen and (min-width: 1600px) {
  width: 600px;
  height: 455px;
 }
 @media screen and (min-width: 1920px) {
  width: 710px;
  height: 582px;
 }
`;

export const HomeSection = styled.section`
 background-image: url(${arrowDesktop});
 background-repeat: no-repeat;
 ${'' /* background-attachment: fixed; */}
 width: 100%;
 z-index: -1;
 padding-bottom: 102px;
 @media screen and (min-width: 768px) {
  padding-bottom: 142px;
 }
 @media screen and (min-width: 1200px) {
  background-position: 20% 30%;
  padding-bottom: 182px;
 }
 @media screen and (min-width: 1920px) {
  background-position: 40% 50%;
  padding-bottom: 202px;
 }
`;

export const MainTitle = styled.h1`
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 40px;
 line-height: 1.33;
 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};

 margin-bottom: 29px;
 @media screen and (min-width: 480px) {
  font-size: 50px;
 }
 @media screen and (min-width: 1920px) {
  font-size: 60px;
 }
`;

export const SpanTitle = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 color: ${mainVars.colors.headerColor};
`;

export const SpanTitleHilight = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 color: ${mainVars.colors.primaryColor};
`;

export const Title = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 1.6;
 text-transform: capitalize;
 color: ${mainVars.colors.contentColor};

 margin-bottom: 40px;
 @media screen and (min-width: 1920px) {
  font-size: 25px;
 }
`;

export const HeroWrap = styled.div`
 display: flex;
 flex-direction: row;
 @media screen and (min-width: 1200px) {
  gap: 35px;
  justify-content: center;
  align-items: center;
 }
`;

export const ButtonWrap = styled(Link)`
 display: block;
 @media screen and (min-width: 768px) {
  display: inline-block;
  margin-right: 21px;
  margin-bottom: 15px;
 }
`;
