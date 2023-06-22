import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export const ModalOverlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: rgba(0, 0, 0, 0.2);
 z-index: 200;
`;

export const ModalBody = styled.div`
 position: relative;
 background-color: #fafafa;
 border-radius: 4px;
 margin-left: auto;
 margin-right: auto;
 box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
 border-radius: 24px;
`;

export const ModalContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 25px 12px;
 max-width: 368px;
 @media (min-width: 478px) {
  padding: 50px 40px;
  max-width: 440px;
 }
 @media screen and (min-width: 768px) {
  max-width: 488px;
 }
 @media screen and (min-width: 1200px) {
  max-width: 575px;
 }
`;

export const ModalCloseButton = styled.button`
 border: none;
 width: 12px;
 height: 12px;
 position: absolute;
 top: 18px;
 right: 18px;
 cursor: pointer;
 background-color: transparent;
 @media (min-width: 478px) {
  width: 14px;
  height: 14px;
  top: 24px;
  right: 24px;
 }
`;

export const Title = styled.h2`
 margin: 0 0 40px 0;
 fornt-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 26px;
 color: ${mainVars.colors.headerColor};
 line-height: 1.16;
 letter-spacing: -0.02em;
 @media screen and (min-width: 768px) {
  margin: 0 0 50px 0;
  font-size: 28px;
  line-height: 1.07;
 }
 @media screen and (min-width: 1440px) {
  font-size: 30px;
 }
`;

export const Input = styled.input`
 margin-bottom: 20px;

 position: relative;
 background-color: initial;
 padding: 12px 16px 12px 40px;
 width: 100%;
 height: 45px;
 border-bottom: 1px solid black;

 fornt-family: 'Open Sans', sans-serif;
 font-weight: 400;
 font-size: 22px;
 line-height: 1.6;
 color: ${mainVars.colors.textColor};

 transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

 :hover,
 :focus {
  border-bottom: 2px solid ${mainVars.colors.primaryColor};
 }
 @media screen and (min-width: 768px) {
  padding: 16px 16px 16px 50px;
 }
`;

export const EmailIcon = styled(AiOutlineMail)`
 display: block;
 position: absolute;
 height: 18px;
 width: 18px;
 opacity: 80%;
 top: 109.5px;
 left: 26px;
 color: ${mainVars.colors.primaryColor};
 @media screen and (min-width: 477px) {
  top: 132.5px;
  left: 48px;
 }
 @media screen and (min-width: 768px) {
  height: 24px;
  width: 24px;
  top: 140.5px;
  left: 48px;
 }
 @media screen and (min-width: 1440px) {
  top: 140.5px;
  left: 48px;
 }
`;

export const PasswordIcon = styled(AiOutlineLock)`
 display: block;
 position: absolute;
 height: 18px;
 width: 18px;
 opacity: 80%;
 top: 173.5px;
 left: 26px;
 color: ${mainVars.colors.primaryColor};
 @media screen and (min-width: 477px) {
  top: 196.5px;
  left: 48px;
 }
 @media screen and (min-width: 768px) {
  height: 24px;
  width: 24px;
  top: 206.5px;
  left: 48px;
 }
 @media screen and (min-width: 1440px) {
  top: 206.5px;
  left: 48px;
 }
`;

export const Button = styled.button`
 margin-top: 20px;
 padding: 16px 40px;

 width: 100%;
 height: 61px;

 background: ${mainVars.colors.headerColor};
 border-radius: 20px;

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;

 text-transform: uppercase;
 transition: ${mainVars.transitions.main};
 color: ${mainVars.colors.whiteColor};
 &:hover {
  background: ${mainVars.colors.primaryColor};
 }
`;

export const InputWrap = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

export const CheckboxLabel = styled.label`
 margin-left: 5px;
 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 18px;
 line-height: 160%;
 color: ${mainVars.colors.textColor};
`;

export const Text = styled.p`
 margin-top: 10px;
 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 18px;
 line-height: 160%;
 color: ${mainVars.colors.textColor};
 span {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const TextLabel = styled.p`
 font-family: 'Inter', sans-serif;
 font-style: normal;
 font-weight: 400;
 font-size: 18px;
 line-height: 160%;
 color: ${mainVars.colors.primaryColor};
`;
