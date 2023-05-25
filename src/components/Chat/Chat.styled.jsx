import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

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

export const Wrapper = styled.div`
 display: flex;
 border-radius: 20px;
 box-shadow: 0px 4px 4px 0px #00000040;
`;

export const ChatWrap = styled.div`
 width: 100%;
 padding: 43px 35px 31px 29px;
 border-radius: 0px 20px 20px 0px;
 ${'' /* border: 1px solid black; */}
 background-color: ${mainVars.colors.lightGreyColor};
`;

export const TitleWrap = styled.div`
 margin-bottom: 26px;

 display: flex;
 align-items: center;
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
 margin-left: auto;

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
`;

export const NavWrap = styled.div`
 width: 107px;
 height: 100%;
 padding: 35px 26px;

 background: ${mainVars.colors.bgColor};
 border-radius: 20px 0px 0px 20px;

 display: grid;
 place-items: center;
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
 ${'' /* heiht: 100%; */}
 padding: 25px;

 background: #f0f0f0;
 border-radius: 20px;

 display: flex;
 gap: 27px;
`;

export const OnlineUser = styled.div``;

export const OnlineUserList = styled.ul`
 display: flex;
 flex-direction: column;
 gap: 14px;
`;
export const OnlineUserItem = styled.li`
 width: 296px;
 height: 75px;
 background: ${mainVars.colors.whiteColor};
 border-radius: 11px;
 box-shadow: 0px 4px 4px 0px #00000040;
`;

export const InputForm = styled.form`
 display: flex;
 flex-direction: row;
`;

export const InputFormWrap = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
`;

export const Input = styled.input`
 padding: 15px 33px;

 background: ${mainVars.colors.whiteColor};
 border-radius: 26px;

 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 500;
 font-size: 20px;
 line-height: 160%;

 text-transform: capitalize;
 color: ${mainVars.colors.textInputColor};
 transition: ${mainVars.transitions.main};
 &:not(:last-of-type) {
  margin-right: 10px;
 }
 &:hover,
 &:focus {
  border: 1px solid ${mainVars.colors.darkGreyColor};
  color: ${mainVars.colors.titleColor};
 }
`;

export const InputName = styled(Input)`
 width: 250px;
`;

export const InputText = styled(Input)`
 width: 450px;
`;

export const BtnForm = styled.button`
 display: inline-block;
 margin-left: 20px;

 padding: 15px 33px;

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
`;

export const ChatBot = styled.div`
 margin-top: 40px;
`;
