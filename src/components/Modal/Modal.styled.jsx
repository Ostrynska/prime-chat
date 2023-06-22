import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

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
 @media (min-width: 478px) {
  padding: 50px 40px;
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
 font-size: 24px;
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
  position: relative;
  box-sizing: border-box;
  background-color: initial;
  padding: 12px 16px 12px 40px;
  width: 100%;
  height: 45px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  border-opacity: 0.3;
  border-radius: 6px;
  fornt-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.8;
  outline: none;

  letter-spacing: -0.02em;
  color: black;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :-webkit-autofill,
  :-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
  }
  [data-autocompleted] {
      background-color: transparent !important;
  }
  :hover,
  :focus {
    border: 1px solid black;
    border-radius: 6px;
  ::placeholder {
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 16px 16px 16px 50px;
  }
`;
