import { Container } from '../Container/Conteiner';
import {
 Section,
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
  <Section>
   <Container>
    <FooterWrap>
     <FooterLogoWrap>
      <LogoLink href="#home">
       <Logo />
       <LogoText>Primarily.</LogoText>
      </LogoLink>
      <FooterContactsWrap>
       <FooterContactsItem>
        <FooterContactsLink href="#">
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
         <FooterSupportLink href="#">About</FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink href="#">Platform</FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink href="#">Resources</FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink href="#">Blog</FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink href="#">Pricing</FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink href="#">Integration</FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink href="#">Testimonials</FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink href="#">Permission</FooterSupportLink>
        </FooterSupportItem>
        <FooterSupportItem>
         <FooterSupportLink href="#">Subscribe</FooterSupportLink>
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
        <a href="#home">
         <Instagram size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="#home">
         <Facebook size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="#home">
         <Twitter size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="#home">
         <Linkedin size={40} />
        </a>
       </FooterSocialItem>
       <FooterSocialItem>
        <a href="#home">
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
       <UpToTop size={50} />
      </FooterCopyright>
     </FooterCopyrightWrap>
    </FooterSocialWrap>
   </Container>
  </Section>
 );
};

export default Footer;
