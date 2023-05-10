import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const ButtonStyle = styled.button`
 display: inline-block;
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 1.61;
 text-transform: uppercase;

 height: 86px;
 border-radius: 72px;

 transition: ${lightTheme.transitions.main};
`;

export const PrimaryButton = styled(ButtonStyle)`
 display: inline-block;
 color: #ffffff;
 padding: 28px 60px 29px;
 background-color: #303030;
 &:hover {
  color: #ffffff;
  background-color: #625ffb;
 }
`;

export const SecondaryButton = styled(ButtonStyle)`
 display: inline-block;
 color: #263238;
 padding: 28px 66px 29px;
 background-color: #f3f3f3;
 &:hover {
  color: #ffffff;
  background-color: #e2992b;
 }
`;
