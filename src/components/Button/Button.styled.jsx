import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const ButtonStyle = styled.button`
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
 min-width: 200px;
 color: #ffffff;
 padding: 28px 60px 29px;
 background-color: #303030;
 &:hover {
  color: #ffffff;
  background-color: #625ffb;
 }
`;

export const SecondaryButton = styled(ButtonStyle)`
 min-width: 259px;
 color: #263238;
 padding: 28px 66px 29px;
 background-color: #f3f3f3;
 &:hover {
  color: #ffffff;
  background-color: #e2992b;
 }
`;

export const PrimaryButtonS = styled(ButtonStyle)`
 min-width: 200px;
 color: #ffffff;
 padding: 28px 60px 29px;
 background-color: #303030;
 &:hover {
  color: #ffffff;
  background-color: #625ffb;
 }
`;

export const SecondaryButtonS = styled(ButtonStyle)`
 padding: 25px 52px 26px;
 background-color: #f3f3f3;
 &:hover {
  color: #ffffff;
  background-color: #e2992b;
 }
`;
