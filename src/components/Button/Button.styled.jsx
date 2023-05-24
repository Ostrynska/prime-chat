import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const ButtonStyle = styled.button`
 display: inline-block;
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 1.61;
 text-transform: uppercase;

 height: 86px;
 border-radius: 72px;

 transition: ${mainVars.transitions.main};
`;

export const PrimaryButton = styled(ButtonStyle)`
 display: inline-block;
 color: ${mainVars.colors.whiteColor};
 padding: 28px 60px 29px;
 background-color: ${mainVars.colors.headerColor};
 &:hover {
  color: ${mainVars.colors.whiteColor};
  background-color: ${mainVars.colors.primaryColor};
 }
`;

export const SecondaryButton = styled(ButtonStyle)`
 display: inline-block;
 color: ${mainVars.colors.titleColor};
 padding: 28px 66px 29px;
 background-color: ${mainVars.colors.greyColor};
 &:hover {
  color: ${mainVars.colors.whiteColor};
  background-color: ${mainVars.colors.secondaryColor};
 }
`;

export const SecondaryButtonIcon = styled(ButtonStyle)`
 display: flex;
 align-items: center;
 color: ${mainVars.colors.titleColor};
 padding: 23px 42px;
 height: 86px;
 background-color: ${mainVars.colors.greyColor};
 &:hover {
  color: ${mainVars.colors.whiteColor};
  background-color: ${mainVars.colors.secondaryColor};
 }
`;
