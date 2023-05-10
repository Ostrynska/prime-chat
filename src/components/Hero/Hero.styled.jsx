import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

import { ReactComponent as SvgHomePage } from '../../images/home-dashboard.svg';

// import arrowDesktop from '../../images/home-arrow@1x.png';
// import arrowDesktopRetina from '../../images/home-arrow@2x.png';
// import bgDesktop from '../../images/bgDesktop@1x.png';
// import bgDesktopRetina from '../../images/bgDesktop@2x.png';

export const Wrapper = styled.div`
 width: 710px;
 ${'' /* height: 497px; */}
 display: inline-block;
`;
export const HomeSection = styled.section``;

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

export const HomePageImage = styled(SvgHomePage)``;
