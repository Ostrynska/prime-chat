import styled from 'styled-components';
import { lightTheme } from '../../utils/theme';

import {
 AiOutlineInstagram,
 AiFillFacebook,
 AiOutlineTwitter,
 AiFillLinkedin,
 AiFillYoutube,
} from 'react-icons/ai';

import { IoIosArrowDropupCircle } from 'react-icons/io';

export const Instagram = styled(AiOutlineInstagram)`
 color: #d2d2d2;
 &:hover {
  color: #625ffb;
 }
`;

export const Facebook = styled(AiFillFacebook)`
 color: #d2d2d2;
 &:hover {
  color: #625ffb;
 }
`;

export const Twitter = styled(AiOutlineTwitter)`
 color: #d2d2d2;
 &:hover {
  color: #625ffb;
 }
`;

export const Linkedin = styled(AiFillLinkedin)`
 color: #d2d2d2;
 &:hover {
  color: #625ffb;
 }
`;

export const Youtube = styled(AiFillYoutube)`
 color: #d2d2d2;
 &:hover {
  color: #625ffb;
 }
`;

export const UpToTop = styled(IoIosArrowDropupCircle)`
 margin-left: 100px;
 color: #303030;
 &:hover {
  color: #625ffb;
 }
`;

export const Section = styled.section`
 padding-top: 135px;
`;

export const FooterWrap = styled.div`
 display: flex;
 gap: 120px;
 align-items: center;
`;

export const FooterLogoWrap = styled.div`
 padding: 60px 61px;
 width: 543px;

 background: #eeeeee;
 border-radius: 30px;
`;

export const FooterContactsWrap = styled.ul`
 margin-top: 40px;
 display: flex;
 flex-direction: column;
 gap: 50px;
`;

export const FooterContactsItem = styled.li``;

export const FooterContactsLink = styled.a`
 all: initial;

 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* or 32px */

 color: #4e4e4e;
`;

export const FooterContactsSpan = styled.span`
 font-weight: 600;
`;

export const LogoLink = styled.a`
 display: flex;
 align-items: center;
`;

export const LogoText = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 40px;
 line-height: 1.3;
 color: ${lightTheme.colors.headerColor};

 margin-left: 14px;
`;

export const FooterSupportWrap = styled.div``;

export const FooterSupportTitle = styled.h2`
 margin-bottom: 32px;
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 25px;
 line-height: 133.2%;
 /* or 33px */

 text-transform: capitalize;
 color: #303030;
`;
export const FooterSupportList = styled.ul`
 display: grid;
 grid-template-columns: repeat(2, 1.2fr);
 column-gap: 140px;
 row-gap: 5px;
`;

export const FooterSupportItem = styled.li``;
export const FooterSupportLink = styled.a`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 20px;
 line-height: 248.5%;
 /* or 50px */

 color: #4e4e4e;
 &:hover {
  color: #625ffb;
 }
`;

export const FooterSocial = styled.div`
 display: flex;
 padding: 26.5px 0 30.5px 0;
`;

export const FooterSocialTitle = styled.h2`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 25px;
 line-height: 133.2%;
 /* or 33px */

 text-transform: capitalize;
 color: #303030;
`;
export const FooterSocialList = styled.ul`
 margin-left: 32px;

 display: flex;
 gap: 15px;
 flex-direction: row;
 align-items: baseline;
`;

export const FooterSocialItem = styled.li``;
export const FooterSocialLink = styled.a`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 20px;
 line-height: 248.5%;
 /* or 50px */

 color: #4e4e4e;
`;

export const FooterSocialWrap = styled.div`
 display: flex;
`;

export const FooterCopyrightWrap = styled.div`
 margin-left: 244px;
 max-width: 751px;

 border-top: 1px solid #cecece;
`;

export const FooterCopyright = styled.div`
 display: flex;
 align-items: center;
 padding: 18px 0 22px 0;
`;

export const FooterCopyrightText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;
 /* identical to box height, or 32px */

 color: #303030;
`;

export const FooterCopyrightSpan = styled.span`
 font-weight: 500;
 color: #625ffb;
`;
