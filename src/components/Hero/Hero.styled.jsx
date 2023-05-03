import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

import { ReactComponent as SvgHomePage } from '../../images/home-dashboard.svg';

import arrowDesktop from '../../images/home-arrow@1x.png';
import arrowDesktopRetina from '../../images/home-arrow@2x.png';
import bgDesktop from '../../images/bgDesktop@1x.png';
import bgDesktopRetina from '../../images/bgDesktop@2x.png';

export const Wrapper = styled.div`
 width: 710px;
 height: 497px;

 ${'' /* position: relative; */}
`;
export const HomeWrapper = styled.div`
 ${'' /* display: flex; */}

 @media screen and (min-width: 1920px) {
  height: 825px;
  background-image: url(${arrowDesktop});
  background-image: url(${bgDesktop});
  @media screen and (min-device-pixel-ratio: 2),
   (min-resolution: 192dpi),
   (min-resolution: 2dppx) {
   background-image: url(${arrowDesktopRetina});
   background-image: url(${bgDesktopRetina});
  }
 }
`;

export const TitleWrap = styled.div`
 width: 151px;
 height: 51px;
 border-radius: 72px;
 padding: 11px 40px;
 background: ${lightTheme.colors.bgSecondaryColor};

 margin-bottom: 10px;
`;

export const TitleWrapText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 1.61;
 text-align: center;
 text-transform: capitalize;
 color: ${lightTheme.colors.secondaryColor};
`;

export const MainTitle = styled.h1`
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 60px;
 line-height: 1.33;
 text-transform: capitalize;
 color: ${lightTheme.colors.headerColor};

 margin-bottom: 29px;
`;

export const SpanTitle = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 color: ${lightTheme.colors.headerColor};
`;

export const SpanTitleHilight = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 color: ${lightTheme.colors.primaryColor};
`;

export const Title = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 400;
 font-size: 25px;
 line-height: 1.6;
 text-transform: capitalize;
 color: ${lightTheme.colors.contentColor};

 margin-bottom: 40px;
`;

export const ButtonStart = styled.button`
 width: 200px;
 height: 86px;
 background: ${lightTheme.colors.headerColor};
 border-radius: 72px;
 margin-right: 21px;

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 1.61;
 text-transform: uppercase;
 color: ${lightTheme.colors.whiteColor};
`;

export const ButtonDemo = styled.button`
 background: transparent;
 width: 259px;
 height: 86px;
 background: ${lightTheme.colors.lightGreyColor};
 border-radius: 72px;

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 1.61;
 text-transform: uppercase;
 color: ${lightTheme.colors.titleColor};
`;

export const HomePageImage = styled(SvgHomePage)``;
