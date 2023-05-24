import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { MdDone } from 'react-icons/md';

import imageBg from '../../images/pricing/bg@1x.png';
import imageBgRetina from '../../images/pricing/bg@2x.png';
import imageBgAccent from '../../images/pricing/bgAccent@1x.png';
import imageBgAccentRetina from '../../images/pricing/bgAccent@2x.png';
import bgArrow from '../../images/pricing/bgArrow.svg';

export const Check = styled(MdDone)`
 color: ${mainVars.colors.successColor};
`;

export const Section = styled.section`
 background-image: url(${bgArrow});
 background-repeat: no-repeat;
 background-position: 10% 98%;
 width: 100%;
 background-color: ${mainVars.colors.lightGreyColor};
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
export const Title = styled.h2`
 margin: auto;
 margin-bottom: 46px;
 max-width: 761px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;

 text-align: center;
 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;

export const SpanTitle = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
`;

export const List = styled.ul`
 display: flex;
 flex-direction: column;
 gap: 54px;
 flex-wrap: wrap;
 @media screen and (min-width: 768px) {
  flex-direction: row;
  gap: 54px;
 }
 @media screen and (min-width: 1920px) {
  flex-wrap: nowrap;
 }
`;

export const Item = styled.li`
 width: 290px;
 height: 100%;
 padding: 47px 10px;
 background: ${mainVars.colors.bgColor};
 border-radius: 30px;
 display: flex;
 flex-direction: column;
 @media screen and (min-width: 340px) {
  width: 100%;
 }
 @media screen and (min-width: 480px) {
  width: 420px;
  padding: 47px 20px;
 }
 @media screen and (min-width: 768px) {
  width: 448px;
  padding: 47px 35px;
 }
 @media screen and (min-width: 1200px) {
  width: 430px;
  padding: 47px 30px;
 }
`;

export const ItemTitle = styled.h3`
 margin-bottom: 25px;
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 30px;
 line-height: 133.2%;

 text-transform: capitalize;
 text-align: center;
 color: ${mainVars.colors.headerColor};
`;

export const Background = styled.div`
 background-image: url(${imageBg});
 background-repeat: no-repeat;
 width: 100%;
 height: 206px;
 padding: 11px 47px 35px 47px;
 @media screen and (min-width: 480px) {
  width: 380px;
 }
 @media screen and (min-device-pixel-ratio: 2),
  screen and (min-resolution: 192dpi),
  (-webkit-min-device-pixel-ratio: 2),
  screen and (min-resolution: 2dppx) {
  background-image: url(${imageBgRetina});
 }
 @media screen and (min-width: 768px) {
  width: 100%;
 }
`;

export const BackgroundAccent = styled.div`
 background-image: url(${imageBgAccent});
 background-repeat: no-repeat;
 width: 100%;
 height: 206px;
 padding: 11px 47px 35px 47px;
 @media screen and (min-device-pixel-ratio: 2),
  screen and (min-resolution: 192dpi),
  (-webkit-min-device-pixel-ratio: 2),
  screen and (min-resolution: 2dppx) {
  background-image: url(${imageBgAccentRetina});
 }
`;

export const PriceSpan = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 60px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.whiteColor};
`;

export const Price = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 500;
 font-size: 17px;
 line-height: 160%;

 text-align: center;
 color: ${mainVars.colors.priceColor};
`;

export const PriceText = styled.p`
 margin-top: 14px;
 font-family: 'Inter', sans-serif;
 font-weight: 500;
 font-size: 14px;
 line-height: 141.5%;

 text-align: center;
 color: ${mainVars.colors.whiteColor};
 @media screen and (min-width: 768px) {
  font-size: 16px;
 }
 @media screen and (min-width: 1200px) {
  font-size: 18px;
 }
`;

export const PriceTitle = styled.h4`
 margin-bottom: 25px;
 margin-top: 25px;
 font-family: 'Inter', sans-serif;
 font-weight: 500;
 font-size: 20px;
 line-height: 160%;

 text-align: center;
 color: ${mainVars.colors.headerColor};
`;

export const PriceList = styled.ul`
 padding-top: 32px;
 padding-bottom: 32px;
 border-top: 1px solid ${mainVars.colors.borderColor};
 border-bottom: 1px solid ${mainVars.colors.borderColor};
 display: flex;
 flex-direction: column;
 gap: 3px;
`;
export const PriceListItem = styled.li`
 display: flex;
 flex-direction: row;
 align-items: center;
`;
export const PriceListText = styled.p`
 margin-left: 10px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 213.5%;

 color: ${mainVars.colors.textColor};
`;

export const PriceListTextSpan = styled.span`
 font-weight: 700;
`;

export const PriceListTextHighlight = styled.span`
 font-weight: 700;
 color: ${({ highlight }) => (highlight ? '#625FFB' : '#FFB545')};
`;

export const Button = styled.button`
 margin-top: 22px;
 padding: 16px 40px;

 width: 100%;
 height: 61px;

 background: ${mainVars.colors.headerColor};
 border-radius: 20px;

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;

 text-transform: uppercase;
 transition: ${mainVars.transitions.main};
 color: ${mainVars.colors.whiteColor};
 &:hover {
  background: ${mainVars.colors.primaryColor};
 }
`;
