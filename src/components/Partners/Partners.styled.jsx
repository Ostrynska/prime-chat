import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const PartnersSection = styled.section`
 margin: 100px 0 135px 0;
 padding: 126px 162px;
 width: 1400px;
 height: 488px;

 background: ${lightTheme.colors.bgGrey};
 border-radius: 30px;
`;

export const PartnersTitle = styled.h2`
 margin-bottom: 59px;
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 25px;
 line-height: 1.2;
 text-align: center;

 color: ${lightTheme.colors.headerColor};
`;

export const PartnersList = styled.ul`
 display: flex;
 flex-wrap: wrap;
 gap: 43px 116px;
 align-items: stretch;
 justify-content: center;
`;

export const PartnersItem = styled.li``;
