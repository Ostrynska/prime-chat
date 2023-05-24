import styled from 'styled-components';
import { mainVars } from '../../utils/theme';
import {
 Accordion,
 AccordionItem,
 AccordionPanel,
 AccordionIcon,
 AccordionButton,
} from '@chakra-ui/react';

// import {
//  IoIosArrowDroprightCircle,
//  IoIosArrowDropdownCircle,
// } from 'react-icons/io';

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

export const TitleContent = styled.div`
 @media screen and (min-width: 1200px) {
  display: flex;
 }
`;
export const Content = styled.div`
 max-width: 659px;
 @media screen and (min-width: 1200px) {
  max-width: 415px;
 }
 @media screen and (min-width: 1920px) {
  max-width: 659px;
 }
`;

export const Title = styled.h2`
 margin-bottom: 21px;
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};

 @media screen and (min-width: 1200px) {
  margin-bottom: 0;
 }
`;

export const TitleSpan = styled.span`
 font-weight: 700;
`;

export const PostTitle = styled.div`
 @media screen and (min-width: 1200px) {
  display: flex;
  margin-left: auto;
  align-items: flex-end;
 }
`;

export const Post = styled.div`
 margin-top: 53px;
 @media screen and (min-width: 1200px) {
  display: flex;
 }
`;

export const List = styled(Accordion)`
 display: flex;
 flex-direction: column;
 gap: 22px;

 @media screen and (min-width: 1200px) {
  margin-right: 25px;
 }
 @media screen and (min-width: 1920px) {
  margin-right: 40px;
 }
`;

export const Item = styled(AccordionItem)`
 padding: 47px 50px;

 background: ${mainVars.colors.greyColor};
 border-radius: 30px;

 @media screen and (min-width: 1200px) {
  padding: 35px 38px;
  width: 388px;
 }
 @media screen and (min-width: 1920px) {
  padding: 47px 50px;
  width: 662px;
 }
`;

export const ItemTitle = styled.h3`
 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
 @media screen and (min-width: 1200px) {
  font-size: 18px;
 }
 @media screen and (min-width: 1920px) {
  font-size: 30px;
 }
`;

export const ItemText = styled(AccordionPanel)`
 margin-top: 10px;
 max-width: 534px;

 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
 @media screen and (min-width: 1200px) {
  font-size: 16px;
 }
 @media screen and (min-width: 1920px) {
  font-size: 20px;
 }
`;

export const Button = styled(AccordionButton)`
 display: flex;
 margin-left: auto;
 align-items: flex-end;
`;

export const Icon = styled(AccordionIcon)`
 display: flex;
 margin-left: auto;
 align-items: flex-end;
 color: ${mainVars.colors.primaryColor};
`;
export const Image = styled.img`
 display: none;
 @media screen and (min-width: 1200px) {
  display: inline-block;
  width: 548px;
 }
 @media screen and (min-width: 1920px) {
  width: 698px;
 }
`;

export const ButtonWrap = styled.div`
 margin-bottom: 12px;
 @media screen and (min-width: 1200px) {
  display: inline-block;
  margin-right: 12px;
  margin-bottom: 0;
 }
 @media screen and (min-width: 1920px) {
  margin-right: 22px;
 }
`;
