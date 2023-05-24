import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

import { IoIosCheckmarkCircle } from 'react-icons/io';

export const Section = styled.section`
 background: #625ffb;
 position: relative;
 padding-top: 65px;
 padding-bottom: 65px;
 @media screen and (min-width: 768px) {
  padding-top: 95px;
  padding-bottom: 95px;
 }
 @media screen and (min-width: 1200px) {
  padding-top: 145px;
  padding-bottom: 145px;
 }
 @media screen and (min-width: 1920px) {
  padding-top: 165px;
  padding-bottom: 165px;
 }
`;

export const Wrap = styled.div`
 max-width: 100%;
 @media screen and (min-width: 1200px) {
  max-width: 578px;
 }
`;

export const Title = styled.h2`
 margin-bottom: 21px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;
 /* or 53px */

 text-transform: capitalize;
 color: #ffffff;
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const Text = styled.p`
 margin-bottom: 42px;
 ${'' /* max-width: 578px; */}

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #ffffff;
`;

export const List = styled.ul`
 display: flex;
 flex-direction: column;
 gap: 22px;
 max-width: 578px;
`;

export const ListItem = styled.li`
 display: flex;
 padding: 12.5px 0 13.5px 15px;

 height: 54px;
 background: linear-gradient(89.88deg, #7573ff 1.51%, #625ffb 84.54%);

 border-radius: 44px;
`;

export const Check = styled(IoIosCheckmarkCircle)`
 margin-right: 12px;
 width: 28px;
 height: 28px;

 color: #ffffff;
`;

export const CheckText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 12px;
 line-height: 160%;
 /* identical to box height, or 29px */

 text-transform: uppercase;
 color: #ffffff;
 @media screen and (min-width: 1200px) {
  font-size: 14px;
 }
 @media screen and (min-width: 1920px) {
  font-size: 18px;
 }
`;

export const Image = styled.img`
 @media screen and (min-width: 1200px) {
 }
 @media screen and (min-width: 1920px) {
 }
`;

export const ImageWrap = styled.div`
 display: none;
 @media screen and (min-width: 1200px) {
  display: flex;
  margin: 0;
  margin-top: 10%;
  width: 577.03px;
  height: 392px;
 }
 @media screen and (min-width: 1920px) {
  margin-top: 0;
  width: 777.03px;
  height: 592px;
 }
`;
