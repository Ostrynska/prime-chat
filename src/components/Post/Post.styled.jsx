import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { ReactComponent as QuoteLogo } from '../../images/quote.svg';

export const Section = styled.section`
 padding-top: 20px;
 padding-bottom: 45px;
 @media screen and (min-width: 768px) {
  padding-top: 40px;
  padding-bottom: 75px;
 }
 @media screen and (min-width: 1200px) {
  padding-top: 80px;
  padding-bottom: 115px;
 }
 @media screen and (min-width: 1920px) {
  padding-top: 100px;
  padding-bottom: 135px;
 }
`;

export const Image = styled.img`
 width: 100%;
 height: 765px;
 border-radius: 25px;
`;

export const PostContent = styled.div`
 margin-top: 38px;
 padding: 0 260px;
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
 padding: 70px 122.5px;

 width: 879px;
 height: 362px;

 background: ${mainVars.colors.primaryColor};
 border-radius: 25px;

 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const PostQuoteText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 text-align: center;
 color: ${mainVars.colors.whiteColor};
`;

export const Quote = styled(QuoteLogo)`
 width: 37.88px;
 height: 22.02px;
`;

export const PostQuoteWrapp = styled.div`
 margin-bottom: 28px;

 width: 101px;
 height: 101px;

 display: flex;
 align-items: center;
 justify-content: center;

 border-radius: 50%;
 background: #ffffff;
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
