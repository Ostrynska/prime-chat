import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import styled from 'styled-components';
import { mainVars } from '../../utils/theme';

import {
 AiOutlineInstagram,
 AiFillFacebook,
 AiOutlineTwitter,
 AiFillLinkedin,
 AiFillYoutube,
} from 'react-icons/ai';

import { IoIosArrowDropupCircle } from 'react-icons/io';

export const Instagram = styled(AiOutlineInstagram)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Facebook = styled(AiFillFacebook)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Twitter = styled(AiOutlineTwitter)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Linkedin = styled(AiFillLinkedin)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const Youtube = styled(AiFillYoutube)`
 color: ${mainVars.colors.iconColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const UpToTop = styled(IoIosArrowDropupCircle)`
 color: ${mainVars.colors.headerColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
 @media screen and (min-width: 1920px) {
  margin-left: 100px;
 }
`;

export const FooterSection = styled.footer``;

export const FooterWrap = styled.div`
 display: flex;
 flex-direction: column;
 @media screen and (min-width: 1200px) {
  gap: 110px;
  align-items: center;
  flex-direction: row;
 }
 @media screen and (min-width: 1920px) {
  gap: 120px;
 }
`;

export const FooterLogoWrap = styled.div`
 background: ${mainVars.colors.bgFooter};
 border-radius: 30px;
 padding: 20px 21px;
 width: 100%;
 @media screen and (min-width: 768px) {
  padding: 30px 31px;
 }
 @media screen and (min-width: 1200px) {
  padding: 40px 41px;
  width: 443px;
 }
 @media screen and (min-width: 1920px) {
  padding: 60px 61px;
  width: 543px;
 }
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

 color: ${mainVars.colors.textColor};
`;

export const FooterContactsSpan = styled.span`
 font-weight: 600;
`;

export const LogoLink = styled(NavLink)`
 display: flex;
 align-items: center;
`;

export const LogoText = styled.p`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 40px;
 line-height: 1.3;
 color: ${mainVars.colors.headerColor};

 margin-left: 14px;
`;

export const FooterSupportWrap = styled.div`
 margin-top: 30px;
 @media screen and (min-width: 1200px) {
  margin-top: 0px;
 }
`;

export const FooterSupportTitle = styled.h2`
 margin-bottom: 32px;
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 25px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;
export const FooterSupportList = styled.ul`
 display: grid;
 grid-template-columns: repeat(2, 1.2fr);
 column-gap: 20px;
 row-gap: 2px;
 @media screen and (min-width: 1200px) {
  column-gap: 140px;
  row-gap: 5px;
 }
`;

export const FooterSupportItem = styled.li``;
export const FooterSupportLink = styled(HashLink)`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 20px;
 line-height: 248.5%;

 color: ${mainVars.colors.textColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const FooterSupportLinkPage = styled(NavLink)`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 20px;
 line-height: 248.5%;

 color: ${mainVars.colors.textColor};
 transition: ${mainVars.transitions.main};
 &:hover {
  color: ${mainVars.colors.primaryColor};
 }
`;

export const FooterSocial = styled.div`
 margin-top: 30px;
 margin-bottom: 15px;

 display: flex;
 flex-wrap: wrap;
 justify-content: stretch;
 @media screen and (min-width: 480px) {
  justify-content: space-between;
 }
 @media screen and (min-width: 1200px) {
  padding: 26.5px 0 30.5px 0;
  margin-top: 0px;
  margin-bottom: 0px;
 }
`;

export const FooterSocialTitle = styled.h2`
 font-family: 'Open Sans', sans-serif;
 font-weight: 700;
 font-size: 25px;
 line-height: 133.2%;

 text-transform: capitalize;
 color: ${mainVars.colors.headerColor};
`;
export const FooterSocialList = styled.ul`
 display: flex;
 gap: 15px;
 flex-direction: row;
 align-items: baseline;
 margin-top: 15px;
 @media screen and (min-width: 417px) {
  margin-top: 0px;
  mardin-left: 10px;
  display: inline-flex;
 }
 @media screen and (min-width: 430px) {
  margin-top: 0px;
  margin-left: 5px;
 }
 @media screen and (min-width: 768px) {
  margin-left: 32px;
 }
 @media screen and (min-width: 1200px) {
  margin-left: 0px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 32px;
 }
`;

export const FooterSocialItem = styled.li``;
export const FooterSocialLink = styled.a`
 font-family: 'Inter', sans-serif;
 font-weight: 600;
 font-size: 20px;
 line-height: 248.5%;

 color: ${mainVars.colors.textColor};
`;

export const FooterSocialWrap = styled.div`
 @media screen and (min-width: 1200px) {
  display: flex;
 }
`;

export const FooterCopyrightWrap = styled.div`
 max-width: 751px;
 border-top: 1px solid ${mainVars.colors.lineColor};
 @media screen and (min-width: 1200px) {
  margin-left: 180px;
 }
 @media screen and (min-width: 1920px) {
  margin-left: 244px;
 }
`;

export const FooterCopyright = styled.div`
 display: flex;
 align-items: center;
 padding: 26.5px 0px 30.5px;

 @media screen and (min-width: 1920px) {
  padding: 18px 0 22px 0;
 }
`;

export const FooterCopyrightText = styled.p`
 font-family: 'Inter', sans-serif;
 font-weight: 400;
 font-size: 20px;
 line-height: 160%;

 color: ${mainVars.colors.headerColor};
`;

export const FooterCopyrightSpan = styled.span`
 font-weight: 500;
 color: ${mainVars.colors.primaryColor};
 &:hover {
  color: ${mainVars.colors.checkOrange};
 }
`;
