import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';
import bgSubscribe from '../../images/subscribe/bgSubscribe@1x.png';

export const Section = styled.section``;

export const TitleContent = styled.div`
 padding: 128px 96px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-image: url(${bgSubscribe});
 background-repeat: no-repeat;
 width: 1399px;
 height: 361px;
`;

export const Title = styled.h2`
 width: 558px;
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

export const Form = styled.form`
 margin: 0 auto;
`;

export const Input = styled.input`
 margin-right: 12px;
 width: 368px;

 background: #454545;
 border-radius: 72px;
 padding: 27px 37px;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* identical to box height, or 32px */

 color: #a0a0a0;
 &:hover,
 &:focus {
  border: 1px solid #e2992b;
  color: #ffffff;
 }
`;

export const Button = styled.button`
 padding: 28px 49px 29px;
 width: 168px;

 background: #ffffff;
 border-radius: 72px;

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 160%;
 /* identical to box height, or 29px */

 text-transform: uppercase;
 color: #303030;
 &:hover {
  color: #ffffff;
  background-color: #e2992b;
 }
`;
