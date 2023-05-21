import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const Section = styled.section`
 ${'' /* padding: 0 135px; */}
 padding-top: 135px;
 padding-bottom: 135px;
`;

export const TitleContent = styled.div`
 display: flex;
 flex-direction: column;
 @media screen and (min-width: 1200px) {
  flex-direction: row;
 }
`;
export const Content = styled.div``;

export const Title = styled.h2`
 max-width: 310px;
 font-family: 'Open Sans', sans-serif;
 font-style: normal;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;
 /* or 53px */

 text-transform: capitalize;
 color: #303030;
 @media screen and (min-width: 480px) {
  max-width: 408px;
 }
 @media screen and (min-width: 1200px) {
  width: 446px;
 }
 @media screen and (min-width: 1920px) {
  width: 466px;
 }
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const PostTitle = styled.div`
 margin-top: 30px;
 display: flex;
 align-items: center;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
 @media screen and (min-width: 1200px) {
  margin-left: 177px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 348px;
 }
`;

export const Platform = styled.ul`
 margin-top: 48px;
 @media screen and (min-width: 1200px) {
  max-width: 960px;
  display: grid;
  grid-template-columns: 544px 382px;
  gap: 36px;
 }
 @media screen and (min-width: 1920px) {
  max-width: 1400px;
  display: grid;
  grid-template-columns: 920px 442px;
  gap: 36px;
 }
`;

export const PlatformRvs = styled.ul`
 margin-top: 32px;
 @media screen and (min-width: 1200px) {
  max-width: 960px;
  display: grid;
  grid-template-columns: 382px 544px;
  gap: 36px;
 }
 @media screen and (min-width: 1920px) {
  max-width: 1400px;
  display: grid;
  grid-template-columns: 442px 920px;
  gap: 36px;
 }
`;
export const PlatformItem = styled.li`
 ${'' /* border: 1px solid #4e4e4e; */}
 margin-bottom: 36px;

 position: relative;
 background: #f8f8f8;
 padding: 55px 30px;
 border-radius: 30px;
 @media screen and (min-width: 1200px) {
  margin-bottom: 0;
 }
 @media screen and (min-width: 1920px) {
  padding: 55px 44px 75px 44px;
 }
`;

export const AltText = styled.div`
 position: absolute;
 top: 95px;
 left: 85px;

 background: rgba(237, 237, 255, 0.5);
 border: 1px solid #eaeaf7;
 backdrop-filter: blur(5px);
 border-radius: 10px;
 padding: 12px 16px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 133.2%;
 /* identical to box height, or 24px */
 color: #625ffb;
`;

export const PlatformTitle = styled.h3`
 margin-top: 53px;
 margin-bottom: 10px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;
 /* identical to box height, or 40px */

 text-transform: capitalize;
 color: #303030;
`;

export const PlatformText = styled.p`
 max-width: 422px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
`;
export const MessengerImage = styled.img`
 display: none;
 @media screen and (min-width: 1920px) {
  display: inline-block;
  position: absolute;
  top: 0px;
  left: -1px;
 }
`;

export const AppImage = styled.img`
 display: none;
 @media screen and (min-width: 1920px) {
  display: inline-block;
  width: 920px;
  height: 409px;
  position: absolute;
  top: -5px;
  left: 0px;
 }
`;
