import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

export const Wrapper = styled.div`
 margin-bottom: 56px;
 position: 'relative';
`;
export const Section = styled.section`
 padding-top: 135px;
 padding-bottom: 135px;
 position: relative;
 ::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  width: 1400px;
  background-color: #cecece;
 }
 ::after {
  bottom: 0;
 }
`;

export const Title = styled.h2`
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 font-size: 60px;
 line-height: 1.33;
 text-transform: capitalize;
 color: ${lightTheme.colors.headerColor};
`;

export const SpanTitle = styled.span`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 color: ${lightTheme.colors.headerColor};
`;

export const Item = styled.div`
 padding: 53px 68px;

 max-width: 749px;

 background: #f8f8f8;
 border-radius: 30px;
 ${'' /* border: 1px solid black; */}
`;

export const Comment = styled.div`
 margin-top: 19px;
 padding-top: 27px;

 max-width: 613px;
 border-top: 1px solid #cccccc;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
`;

export const TitleWrap = styled.div`
 display: flex;
`;

export const User = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
 margin-left: 20px;
`;

export const UserName = styled.h3`
 font-family: 'Open Sans', sans-serif;
 font-weight: 600;
 font-size: 30px;
 line-height: 133.2%;
 /* identical to box height, or 40px */

 text-transform: capitalize;
 color: #303030;
`;

export const UserPosition = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 18px;
 line-height: 160%;
 /* identical to box height, or 29px */

 text-transform: capitalize;
 color: #625ffb;
`;
