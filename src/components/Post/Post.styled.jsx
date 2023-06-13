import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { ReactComponent as QuoteLogo } from '../../images/quote.svg';

export const Section = styled.div`
 padding-bottom: 45px;
 @media screen and (min-width: 768px) {
  padding-bottom: 75px;
 }
 @media screen and (min-width: 1200px) {
  padding-bottom: 115px;
 }
 @media screen and (min-width: 1920px) {
  padding-bottom: 135px;
 }
`;

export const Image = styled.img`
 width: 100%;
 object-fit: cover;
 border-radius: 25px;
 @media screen and (min-width: 1200px) {
  height: 614px;
 }
`;

export const PostContent = styled.div`
 position: relative;

 margin-top: 38px;
 padding: 0 60px;
 @media screen and (min-width: 768px) {
  padding: 0 60px;
 }
 @media screen and (min-width: 1200px) {
  padding: 0 180px;
 }
 @media screen and (min-width: 1920px) {
  padding: 0 260px;
 }
`;

export const PostData = styled.p`
 margin-bottom: 20px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
`;

export const PostTitle = styled.h2`
 margin-bottom: 20px;

 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;

export const PostText = styled.p`
 margin-top: 38px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};

 p {
  margin-bottom: 41px;
 }
`;

export const PostQuote = styled.div`
 margin-top: 50px;

 padding: 20px 31.5px;
 width: 100%;

 background: ${mainVars.colors.primaryColor};
 border-radius: 25px;

 display: flex;
 flex-direction: column;
 align-items: center;
 @media screen and (min-width: 1200px) {
  padding: 30px 39.5px;
  width: 815px;
  width: 599px;
 }
 @media screen and (min-width: 1920px) {
  padding: 70px 122.5px;
  width: 879px;
  height: 362px;
 }
`;

export const PostQuoteText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 line-height: 160%;

 text-align: center;
 color: ${mainVars.colors.whiteColor};
 @media screen and (min-width: 1200px) {
  font-size: 18px;
 }
 @media screen and (min-width: 1920px) {
  font-size: 20px;
 }
`;

export const Quote = styled(QuoteLogo)`
 width: 37.88px;
 height: 22.02px;
`;

export const PostQuoteWrapp = styled.div`
 margin-bottom: 28px;

 width: 81px;
 height: 81px;

 display: flex;
 align-items: center;
 justify-content: center;

 border-radius: 50%;
 background: #ffffff;
 @media screen and (min-width: 1200px) {
  width: 101px;
  height: 101px;
 }
`;

export const PostList = styled.ul`
 display: flex;
 flex-direction: column;
 gap: 25px;
 li {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;

  text-transform: capitalize;
  color: ${mainVars.colors.textColor};
 }
`;

export const Button = styled.button`
 display: none;
 @media screen and (min-width: 1200px) {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 140px;
  height: 51px;
  border-radius: 72px;
  background: ${mainVars.colors.primaryColor};
  transition: ${mainVars.transitions.main};

  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.61;
  text-align: center;
  text-transform: capitalize;
  color: ${mainVars.colors.whiteColor};

  position: absolute;
  transform: translate(-50%, -50%);
  top: 2%;
  left: 8%;
 }
 @media screen and (min-width: 1920px) {
  transform: translate(-50%, -50%);
  top: 2%;
  left: 5%;
 }
 &:hover {
  color: ${mainVars.colors.whiteColor};
  background-color: ${mainVars.colors.secondaryColor};
`;
