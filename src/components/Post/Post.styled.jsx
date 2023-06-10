import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import { ReactComponent as QuoteLogo } from '../../images/quote.svg';

export const Section = styled.div`
 padding-bottom: 85px;
 @media screen and (min-width: 768px) {
  padding-bottom: 100px;
 }
 @media screen and (min-width: 1200px) {
  padding-bottom: 175px;
 }
 @media screen and (min-width: 1920px) {
  padding-bottom: 201px;
 }
`;

export const Image = styled.img`
 width: 100%;
 height: 614px;
 object-fit: cover;
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

export const Button = styled.button`
 min-width: 140px;
 height: 51px;
 border-radius: 72px;
 background: ${mainVars.colors.primaryColor};

 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 1.61;
 text-align: center;
 text-transform: capitalize;
 color: ${mainVars.colors.whiteColor};

 position: absolute;
 bottom: 50px;
`;
