import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const ImageWrapp = styled.div`
 display: flex;
 justify-content: center;
`;

export const Text = styled.p`
 margin: auto;
 margin-top: 10px;
 margin-bottom: 58px;
 max-width: 100%;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 text-align: center;
 color: ${mainVars.colors.textColor};
 @media screen and (min-width: 1200px) {
  max-width: 927px;
 }
`;

export const Title = styled.h3`
 margin: 0 auto;
 max-width: 571px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 500;
 font-size: 28px;
 line-height: 133.2%;

 text-align: center;
 text-transform: capitalize;

 color: ${mainVars.colors.headerColor};
`;
