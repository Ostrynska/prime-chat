import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const HomeSection = styled.section``;

export const TitleWrap = styled.div`
 display: inline-block;
 min-width: 151px;
 height: 51px;
 border-radius: 72px;
 padding: 11px 40px;
 background: ${lightTheme.colors.bgSecondaryColor};

 margin-bottom: 17px;
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

export const TitleWrapSecondary = styled.div`
 display: inline-block;
 min-width: 151px;
 height: 51px;
 border-radius: 72px;
 padding: 11px 40px;
 background: #7976ff;

 margin-bottom: 17px;
`;

export const TitleWrapTextSecondary = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 1.61;
 text-align: center;
 text-transform: capitalize;
 color: #ffffff;
`;
