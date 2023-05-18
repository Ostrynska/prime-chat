import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

import { MdDone } from 'react-icons/md';

import imageBg from '../../images/pricing/bg@1x.png';
import imageBgRetina from '../../images/pricing/bg@2x.png';
import imageBgAccent from '../../images/pricing/bgAccent@1x.png';
import imageBgAccentRetina from '../../images/pricing/bgAccent@2x.png';
import bgArrow from '../../images/pricing/bgArrow.svg';

export const Check = styled(MdDone)`
 color: #2fcf3f;
`;

export const Section = styled.section`
 padding-top: 135px;
 padding-bottom: 135px;
 background: linear-gradient(
  180deg,
  #f5f5f5 0%,
  rgba(245, 245, 245, 0) 114.83%
 );
 background-image: url(${bgArrow});
 background-repeat: no-repeat;
 background-position: 10% 98%;
 width: 100%;
 z-index: -1;
`;
export const Title = styled.h2`
 margin: auto;
 margin-bottom: 46px;
 max-width: 761px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;
 /* or 53px */

 text-align: center;
 text-transform: capitalize;
 color: ${lightTheme.colors.headerColor};
`;

export const SpanTitle = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
`;

export const List = styled.ul`
 display: flex;
 gap: 54px;
`;

export const Item = styled.li`
 width: 430px;
 height: 100%;
 padding: 47px 30px;
 background: #ffffff;
 border-radius: 30px;
 display: flex;
 flex-direction: column;
`;

export const ItemTitle = styled.h3`
 margin-bottom: 25px;
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 30px;
 line-height: 133.2%;
 /* identical to box height, or 40px */

 text-transform: capitalize;
 text-align: center;
 color: ${lightTheme.colors.headerColor};
`;

export const Background = styled.div`
 background-image: url(${imageBg});
 width: 370px;
 height: 206px;
 padding: 11px 47px 35px 47px;
 @media screen and (min-device-pixel-ratio: 2),
  screen and (min-resolution: 192dpi),
  (-webkit-min-device-pixel-ratio: 2),
  screen and (min-resolution: 2dppx) {
  background-image: url(${imageBgRetina});
 }
`;

export const BackgroundAccent = styled.div`
 background-image: url(${imageBgAccent});
 width: 370px;
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
 /* identical to box height, or 80px */

 text-transform: capitalize;
 color: #ffffff;
`;

export const Price = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 500;
 font-size: 17px;
 line-height: 160%;
 /* or 27px */

 text-align: center;
 color: #878787;
`;

export const PriceText = styled.p`
 margin-top: 14px;
 font-family: 'Inter', sans-serif;
 font-weight: 500;
 font-size: 18px;
 line-height: 141.5%;
 /* or 25px */

 text-align: center;
 color: #ffffff;
`;

export const PriceTitle = styled.h4`
 margin-bottom: 25px;
 margin-top: 25px;
 font-family: 'Inter', sans-serif;
 font-weight: 500;
 font-size: 20px;
 line-height: 160%;
 /* identical to box height, or 32px */

 text-align: center;
 color: ${lightTheme.colors.headerColor};
`;

export const PriceList = styled.ul`
 padding-top: 32px;
 padding-bottom: 32px;
 border-top: 1px solid #d0d0d0;
 border-bottom: 1px solid #d0d0d0;
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
 /* or 43px */

 color: #4e4e4e;
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
 padding: 16px 123px;

 width: 370px;
 height: 61px;

 background: #303030;
 border-radius: 20px;

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;
 /* identical to box height, or 29px */

 text-transform: uppercase;
 color: #ffffff;
 &:hover {
  background: #625ffb;
 }
`;
