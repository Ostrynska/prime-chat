import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

// import { ReactComponent as SvgHomePage } from '../../images/home-dashboard.svg';

import arrowDesktop from '../../images/home-arrow.svg';

export const Wrapper = styled.div`
 width: 710px;
 display: inline-block;
`;
export const HomeSection = styled.section`
 padding-bottom: 202px;
 background-image: url(${arrowDesktop});
 background-repeat: no-repeat;
 background-position: 60% 80%;
 width: 100%;
 z-index: -1;
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

// export const HomePageImage = styled(SvgHomePage)``;
