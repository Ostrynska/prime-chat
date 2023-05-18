import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

import { IoIosCheckmarkCircle } from 'react-icons/io';

import integrationDesktop from '../../images/integration/bgPatternDesktop@1x.png';
import integrationDesktopRetina from '../../images/integration/bgPatternDesktop@2x.png';

export const Section = styled.section`
 padding-top: 165px;
 padding-bottom: 165px;
 background: #625ffb;
 background-image: url(${integrationDesktop});
 background-size: cover;
 width: 100%;
 ${'' /* max-width: 904px; */}
 z-index: -1;
 @media screen and (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
  background-image: url(${integrationDesktopRetina});
 }
`;
export const Container = styled.div`
 text-align: center;
 margin-left: auto;
 margin-right: auto;
 ${
  '' /* padding-left: 260px;
 padding-right: 260px; */
 }
 width: 1920px;
`;

export const Title = styled.h2`
 margin: 0 auto;
 margin-bottom: 45px;
 max-width: 571px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;
 /* or 53px */

 text-align: center;
 text-transform: capitalize;

 color: #ffffff;
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const Text = styled.p`
 margin: auto;
 margin-top: 45px;
 margin-bottom: 56px;
 max-width: 927px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 text-align: center;

 color: #ffffff;
`;

export const List = styled.ul`
 display: flex;
 flex-direction: row;
 gap: 80px;
 align-items: center;
 justify-content: center;
`;

export const ListItem = styled.li`
 display: flex;
 padding: 12.5px 0 13.5px 15px;

 height: 54px;
 background: linear-gradient(89.88deg, #7573ff 1.51%, #625ffb 84.54%);

 border-radius: 44px;
`;

export const Check = styled(IoIosCheckmarkCircle)`
 margin-right: 12px;
 width: 28px;
 height: 28px;

 color: #ffffff;
`;

export const CheckText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;
 /* identical to box height, or 29px */

 text-transform: uppercase;

 color: #ffffff;
`;
