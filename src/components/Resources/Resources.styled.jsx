import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const Section = styled.section`
 padding-top: 135px;
 padding-bottom: 135px;
`;
export const Title = styled.h2`
 margin: 0 auto;
 margin-top: 7px;
 margin-bottom: 90px;
 max-width: 659px;

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
 flex-direction: column;
 gap: 150px;
`;

export const Item = styled.li`
 display: flex;
 flex-direction: row;
 gap: 120px;
`;

export const ItemContent = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 width: 556px;
`;

export const ItemTitle = styled.h3`
 margin-top: 25px;
 margin-bottom: 28px;
 max-width: 506px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;
 /* or 40px */

 text-transform: capitalize;
 color: ${lightTheme.colors.headerColor};
`;
export const ItemText = styled.p`
 margin-bottom: 25px;

 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
`;
