import { HashLink as Link } from 'react-router-hash-link';
import { Container } from '../Container/Conteiner';
import {
 FooterSection,
 LogoLink,
 LogoText,
 FooterLogoWrap,
 FooterContactsWrap,
 FooterContactsItem,
 FooterContactsLink,
 FooterContactsSpan,
 Instagram,
 Facebook,
 Twitter,
 Linkedin,
 Youtube,
 UpToTop,
 FooterWrap,
 FooterSupportWrap,
 FooterSupportTitle,
 FooterSupportList,
 FooterSupportItem,
 FooterSupportLink,
 FooterSupportLinkPage,
 FooterSocialWrap,
 FooterSocialTitle,
 FooterSocialList,
 FooterSocial,
 FooterSocialItem,
 FooterCopyrightWrap,
 FooterCopyrightText,
 FooterCopyrightSpan,
 FooterCopyright,
} from './Footer.styled';

import { ReactComponent as Logo } from '../../images/logo.svg';

const Footer = () => {
 return (
  <FooterSection>
   <Container>
    <FooterWrap>
     <FooterLogoWrap>
      <LogoLink to={'/'}>
       <Logo />
       <LogoText>Primarily.</LogoText>
      </LogoLink>
      <FooterContactsWrap>
       <FooterContactsItem>
        <FooterContactsLink href="https://goo.gl/maps/Cx5XwLTdZTRS3aPP7">
         1811 Silverside Rd, Wilmington,
         <br /> DE 19810, USA
        </FooterContactsLink>
       </FooterContactsItem>
       <FooterContactsItem>
        <FooterContactsLink href="tel:+10012560034">
         US: +1 <FooterContactsSpan>(001) 256-0034</FooterContactsSpan>
        </FooterContactsLink>
        <br />
        <FooterContactsLink href="tel:+05555141245">
         UK: +0 <FooterContactsSpan>(555) 514-1245</FooterContactsSpan>
        </FooterContactsLink>
       </FooterContactsItem>
       <FooterContactsItem>
        <FooterContactsLink href="mailto:support@primchat.com">
         email: support@primchat.com
        </FooterContactsLink>
       </FooterContactsItem>
      </FooterContactsWrap>
     </FooterLogoWrap>

     <FooterSupportWrap>
      <FooterSupportTitle>Pages</FooterSupportTitle>
      <nav>
       <FooterSupportList>
        <FooterSupportItem>
         <FooterSupportLink smooth to="/#about-us">
          About Us
         </FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink smooth to="/#platform">
          Platform
         </FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink smooth to="/#resources">
          Resources
         </FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLinkPage to={'/blog'}>Blog</FooterSupportLinkPage>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink smooth to="/#pricing">
          Pricing
         </FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink smooth to="/#integration">
          Integration
         </FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink smooth to="/#testimonials">
          Testimonials
         </FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink smooth to="/#permission">
          Permission
         </FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink smooth to="/#subscribe">
          Subscribe
         </FooterSupportLink>
        </FooterSupportItem>
       </FooterSupportList>
      </nav>
     </FooterSupportWrap>
    </FooterWrap>

    <FooterSocialWrap>
     <FooterSocial>
      <FooterSocialTitle>Follow Us:</FooterSocialTitle>
      <FooterSocialList>
       <FooterSocialItem>
        <a href="https://www.instagram.com/">
         <Instagram size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="https://www.facebook.com/">
         <Facebook size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="https://twitter.com/">
         <Twitter size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="https://www.linkedin.com/">
         <Linkedin size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="https://www.youtube.com/s">
         <Youtube size={40} />
        </a>
       </FooterSocialItem>
      </FooterSocialList>
     </FooterSocial>

     <FooterCopyrightWrap>
      <FooterCopyright>
       <FooterCopyrightText>
        Copyright © PrimeChat by{' '}
        <FooterCopyrightSpan>VictorFlow</FooterCopyrightSpan> powered by{' '}
        <FooterCopyrightSpan>Webflow</FooterCopyrightSpan>.
       </FooterCopyrightText>
       <Link smooth to="/#home">
        <UpToTop size={50} />
       </Link>
      </FooterCopyright>
     </FooterCopyrightWrap>
    </FooterSocialWrap>
   </Container>
  </FooterSection>
 );
};

export default Footer;
