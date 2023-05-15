import { Container } from '../Container/Conteiner';
import { Section, LogoLink, LogoText } from './Footer.styled';

import { ReactComponent as Logo } from '../../images/logo.svg';

const Footer = () => {
 return (
  <Section>
   <Container>
    <div>
     <div>
      <LogoLink href="#home">
       <Logo />
       <LogoText>Primarily.</LogoText>
      </LogoLink>
      <div>
       <address>1811 Silverside Rd, Wilmington, DE 19810, USA</address>
       <a href="tel:+10012560034">US: +1 (001) 256-0034</a>
       <a href="tel:+05555141245">UK: +0 (555) 514-1245</a>
       <a href="mailto:support@primchat.com">email: support@primchat.com</a>
      </div>

      <div>
       <div>
        <h2>Support</h2>
        <nav>
         <ul>
          <li>About</li>
          <li>Platform</li>
          <li>Resources</li>
          <li>Blog</li>
          <li>Pricing</li>
         </ul>
        </nav>
       </div>

       <div>
        <h2>Utility Pages</h2>
        <nav>
         <ul>
          <li>Licenses</li>
          <li>Protected</li>
          <li>Not Found</li>
         </ul>
        </nav>
       </div>
      </div>

      <div>
       <div>
        <p>Follow Us :</p>
        <ul>
         <li>
          <a href="#home"></a>
         </li>
         <li>
          <a href="#home"></a>
         </li>
         <li>
          <a href="#home"></a>
         </li>
         <li>
          <a href="#home"></a>
         </li>
         <li>
          <a href="#home"></a>
         </li>
        </ul>
       </div>
       <div>Copyright © PrimeChat by VictorFlow powered by Webflow.</div>
       <div>Button</div>
      </div>
     </div>
    </div>
   </Container>
  </Section>
 );
};

export default Footer;
