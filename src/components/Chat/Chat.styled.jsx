import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export const Section = styled.section`
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

export const Online = styled.div`
 position: absolute;
 width: 10px;
 height: 10px;
 left: 45px;
 top: 4px;
 border-radius: 50%;
 background: green;
`;

export const Wrapper = styled.div`
 display: flex;
 border-radius: 20px;
 box-shadow: 0px 4px 4px 0px #00000040;
`;

export const ChatWrap = styled.div`
 width: 100%;
 border-radius: 0px 20px 20px 0px;
 background-color: ${mainVars.colors.lightGreyColor};
 @media screen and (min-width: 1200px) {
  padding: 38px 32px 28px 25px;
 }
 @media screen and (min-width: 1920px) {
  padding: 43px 35px 31px 29px;
 }
`;

export const TitleWrap = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 @media screen and (min-width: 1200px) {
  margin-bottom: 26px;
  flex-direction: row;
 }
`;

export const ChatTitle = styled.h1`
 font-family: 'Open Sans', sans-serif;
 font-style: normal;
 font-weight: 300;
 font-size: 40px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.titleColor};

 span {
  font-weight: 700;
  color: ${mainVars.colors.primaryColor};
 }
`;

export const ChatPreTitle = styled.h2`
 font-family: 'Open Sans', sans-serif;
 font-style: normal;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.titleColor};
 span {
  font-weight: 700;
  color: ${mainVars.colors.primaryColor};
 }
 @media screen and (min-width: 1200px) {
  margin-left: auto;
 }
`;

export const NavWrap = styled.div`
 width: 97px;
 padding: 35px 26px;

 background: ${mainVars.colors.bgColor};
 border-radius: 20px 0px 0px 20px;

 place-items: center;
 @media screen and (min-width: 1200px) {
  width: 107px;
 }
`;

export const List = styled.ul`
 margin-top: 43px;

 display: flex;
 flex-direction: column;
 gap: 9px;
`;

export const Item = styled.li`
 display: grid;
 place-items: center;

 width: 42px;
 height: 42px;

 background-color: ${mainVars.colors.btnChat};
 border-radius: 500px;
 transition: ${mainVars.transitions.main};

 &:hover,
 &:focus {
  background-color: ${mainVars.colors.primaryColor};
  cursor: pointer;
 }
 &:hover svg path {
  stroke: ${mainVars.colors.whiteColor};
 }
`;

export const Form = styled.div`
 width: 100%;
 padding: 25px;

 gap: 17px;

 background: #f0f0f0;
 border-radius: 20px;

 display: flex;
 flex-direction: column;
 align-items: stretch;

 @media screen and (min-width: 1200px) {
  height: 604px;
  flex-direction: row;
  justify-content: flex-start;
  gap: 27px;
 }
 @media screen and (min-width: 1920px) {
  justify-content: space-around;
 }
`;

export const OnlineUser = styled.div``;

export const OnlineUserList = styled.ul`
 display: flex;
 flex-direction: column;
 align-items: center;
 @media screen and (min-width: 1200px) {
  gap: 7px;
 }
 @media screen and (min-width: 1920px) {
  gap: 14px;
 }
`;
export const OnlineUserItem = styled.li`
 width: 296px;
 height: 75px;
 padding: 10px 20px;
 background: ${mainVars.colors.whiteColor};
 border-radius: 11px;
 box-shadow: 0px 4px 4px 0px #00000040;
`;

export const OnlineUserItemName = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-style: normal;
 font-weight: 500;
 font-size: 20px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.titleColor};
`;

export const ItemWrapper = styled.form`
 display: flex;
 position: relative;
`;

export const InputForm = styled.div`
 display: flex;
 position: relative;
`;

export const InputFormWrap = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 padding-top: 10px;
`;

export const Input = styled.input`
 padding: 15px 33px;

 font-family: 'Inter', sans-serif;
 font-weight: 500;
 font-size: 20px;
 line-height: 160%;
`;

export const InputName = styled(Input)`
 width: 370px;
 background: linear-gradient(
  89.88deg,
  #d3d2ff 1.51%,
  rgba(255, 255, 255, 0) 84.54%
 );
 border-radius: 44px;
 ::placeholder {
  color: ${mainVars.colors.primaryColor};
  font-weight: 600;
 }
 &:hover,
 &:focus {
  border: 1px solid ${mainVars.colors.primaryColor};
  color: ${mainVars.colors.titleColor};
 }
`;

export const InputText = styled(Input)`
 width: 210px;
 background: ${mainVars.colors.whiteColor};

 border-radius: 26px;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

 color: ${mainVars.colors.textInputColor};
 transition: ${mainVars.transitions.main};
 @media screen and (min-width: 768px) {
  width: 255px;
 }
 @media screen and (min-width: 1200px) {
  width: 277px;
 }
 @media screen and (min-width: 1920px) {
  width: 688px;
 }
 &:hover,
 &:focus {
  border: 1px solid ${mainVars.colors.darkGreyColor};
  color: ${mainVars.colors.titleColor};
 }
`;

export const BtnForm = styled.button`
 display: inline-block;
 padding: 15px 16px;
 margin-left: 5px;

 background: ${mainVars.colors.primaryColor};
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;

 text-transform: capitalize;
 color: ${mainVars.colors.whiteColor};
 border-radius: 72px;
 transition: ${mainVars.transitions.main};

 &:hover,
 &:focus {
  background: ${mainVars.colors.secondaryColor};
 }
 @media screen and (min-width: 1200px) {
  margin-left: 5px;
  padding: 15px 33px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 20px;
 }
`;

export const BtnName = styled.button`
 position: relative;
`;

export const WelcomeText = styled.p`
 display: none;
 @media screen and (min-width: 1200px) {
  display: flex;
  margin-bottom: 40px;
  text-align: end;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 133.2%;

  text-transform: capitalize;
  color: ${mainVars.colors.titleColor};

  span {
   font-weight: 700;
   color: ${mainVars.colors.primaryColor};
  }
 }
`;

export const BtnNameIcon = styled(IoCheckmarkCircleSharp)`
 position: absolute;
 width: 40px;
 height: 40px;
 left: 321px;
 bottom: 21px;
 color: ${mainVars.colors.primaryColor};
 transition: ${mainVars.transitions.main};

 &:hover,
 &:focus {
  color: ${mainVars.colors.secondaryColor};
 }
`;

export const ChatBot = styled.div``;

export const ExitForm = styled.button`
 position: absolute;
 left: -92px;
 top: 20px;
 @media screen and (min-width: 1200px) {
  left: -450px;
 }
 @media screen and (min-width: 1920px) {
  left: -478px;
 }
`;

export const ChatBoxList = styled.ul`
 display: flex;
 flex-direction: column;
`;

export const ChatBoxItem = styled.li`
 display: flex;
 align-items: flex-end;
 margin-bottom: 10px;
 @media screen and (min-width: 1200px) {
  margin-bottom: 14px;
 }
 @media screen and (min-width: 1920px) {
  margin-bottom: 18px;
 }
`;

export const ChatText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 12px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
 @media screen and (min-width: 1200px) {
  font-size: 14px;
 }
 @media screen and (min-width: 1920px) {
  font-size: 20px;
 }
`;

export const ChatUser = styled.p`
 margin-right: 8px;

 font-family: 'Inter', sans-serif;
 line-height: 160%;
 font-weight: 700;
 color: ${mainVars.colors.primaryColor};

 @media screen and (min-width: 1200px) {
  margin-right: 15px;
  font-size: 18px;
 }
 @media screen and (min-width: 1920px) {
  margin-right: 25px;
  font-size: 22px;
 }
`;

export const ChatMessage = styled.div`
 display: flex;
 flex-direction: column;

 padding: 7px 15px;

 border-radius: 25px;
 background: ${mainVars.colors.whiteColor};
 @media screen and (min-width: 1200px) {
  align-items: center;
  padding: 7px 25px;
  align-items: start;
 }
 @media screen and (min-width: 1920px) {
  padding: 7px 30px;
  flex-direction: row;
 }
`;

export const ChatDate = styled.p`
 margin-left: auto;
 margin-right: 18px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 10px;
 line-height: 160%;

 color: ${mainVars.colors.textColor};
 @media screen and (min-width: 1200px) {
 font-size: 12px;
 @media screen and (min-width: 1920px) {
  font-size: 16px;
 }
`;
