import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

export const Section = styled.section`
 padding-top: 45px;
 padding-bottom: 45px;
 @media screen and (min-width: 768px) {
  padding-top: 75px;
  padding-bottom: 75px;
 }
 @media screen and (min-width: 1200px) {
  padding-top: 115px;
  padding-bottom: 115px;
 }
 @media screen and (min-width: 1920px) {
  padding-top: 135px;
  padding-bottom: 135px;
 }
`;
export const Title = styled.h2`
 margin: 0 auto;
 margin-bottom: 90px;
 max-width: 300px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;

 text-align: center;
 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
 @media screen and (min-width: 768px) {
  max-width: 760px;
 }
 @media screen and (min-width: 768px) {
  max-width: 659px;
 }
`;

export const SpanTitle = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
`;

export const List = styled.ul`
 display: flex;
 justify-content: center;
 flex-direction: column;
 gap: 50px;
 @media screen and (min-width: 768px) {
  gap: 100px;
 }
 @media screen and (min-width: 1200px) {
  gap: 150px;
 }
`;

export const Item = styled.li`
 display: flex;
 flex-direction: column;
 gap: 30px;
 @media screen and (min-width: 768px) {
  gap: 50px;
 }
 @media screen and (min-width: 1200px) {
  flex-direction: row;
  gap: 120px;
 }
`;

export const ItemContent = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 width: 100%;
 @media screen and (min-width: 1200px) {
  width: 556px;
 }
`;

export const ItemTitle = styled.h3`
 margin-top: 25px;
 margin-bottom: 28px;
 max-width: 506px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;
export const ItemText = styled.p`
 margin-bottom: 25px;

 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
`;

export const ItemImageFirst = styled.img`
 width: 270px;
 @media screen and (min-width: 480px) {
  width: 440px;
 }
 @media screen and (min-width: 768px) {
  width: 540px;
  height: 458px;
 }
 @media screen and (min-width: 1200px) {
  width: 480px;
  height: 440px;
 }
 @media screen and (min-width: 1920px) {
  width: 703px;
  height: 608px;
 }
`;

export const ItemImageSecond = styled.img`
 display: none;
 @media screen and (min-width: 1200px) {
  display: inline-block;
  width: 420px;
  height: 400px;
 }
 @media screen and (min-width: 1920px) {
  width: 703px;
  height: 589px;
 }
`;

export const ItemImageThird = styled.img`
 width: 270px;
 @media screen and (min-width: 480px) {
  width: 440px;
 }
 @media screen and (min-width: 768px) {
  margin-top: 5%;
  width: 420px;
  height: 370px;
 }
 @media screen and (min-width: 1920px) {
  margin: 0;
  width: 762px;
  height: 502px;
 }
`;
