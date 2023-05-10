import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const Wrapper = styled.div`
 margin-bottom: 56px;
`;
export const Section = styled.section`
 padding-top: 135px;
 padding-bottom: 135px;
`;

export const Title = styled.h1`
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 60px;
 line-height: 1.33;
 text-transform: capitalize;
 color: ${lightTheme.colors.headerColor};
`;

export const SpanTitle = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 color: ${lightTheme.colors.headerColor};
`;
