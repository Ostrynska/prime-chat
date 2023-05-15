import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const Section = styled.section`
 padding-top: 135px;
 padding-bottom: 135px;
`;

export const LogoLink = styled.a`
 display: flex;
 align-items: center;
`;

export const LogoText = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 40px;
 line-height: 1.3;
 color: ${lightTheme.colors.headerColor};

 margin-left: 14px;
`;
