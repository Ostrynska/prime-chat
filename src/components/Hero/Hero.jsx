import { Container } from '../Container/Conteiner';
import { Button } from '../Button/Button';
import { PreTitle } from '../PreTitle/PreTitle';
import {
 MainTitle,
 SpanTitle,
 SpanTitleHilight,
 Title,
 Wrapper,
 HomeSection,
} from './Hero.styled';

import bgDesktop from '../../images/bgDesktop@1x.png';
import bgDesktopRetina from '../../images/bgDesktop@2x.png';

import bgImageDesktop from '../../images/home-dashboard@1x.png';
import bgImageDesktopRetina from '../../images/home-dashboard@2x.png';

const Hero = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <HomeSection>
   <Container>
    <Wrapper>
     <PreTitle variant="primary" text={'Chatbot'} />
     <MainTitle>
      Offer the <br />
      best <SpanTitle>Conversational</SpanTitle>
      <SpanTitleHilight> Experience</SpanTitleHilight> With Our Primchat
      Software
     </MainTitle>
     <Title>
      Provide excellent customer service. Answer more tickets all-in-one
      Primarily software.
     </Title>
     <div style={{ display: 'inline-block', marginRight: '21px' }}>
      <Button variant="primary" text={'Get started'} />
     </div>
     <Button variant="secondary" text={'Book a demo'} />
    </Wrapper>
    <img
     src={isRetina ? bgDesktopRetina : bgDesktop}
     alt="Home block"
     height={1028}
     width={481}
     style={{
      position: 'absolute',
      top: '-10px',
      right: '0px',
      zIndex: '-2',
     }}
    />
    <img
     src={isRetina ? bgImageDesktopRetina : bgImageDesktop}
     alt="Home img block"
     height={631}
     width={795}
     style={{
      position: 'absolute',
      top: '206px',
      right: '100px',
      zIndex: '4',
     }}
    />
   </Container>
  </HomeSection>
 );
};

export default Hero;
