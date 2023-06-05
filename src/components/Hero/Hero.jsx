import { Button } from '../Button/Button';
import { PreTitle } from '../PreTitle/PreTitle';
import {
 MainTitle,
 SpanTitle,
 SpanTitleHilight,
 Title,
 Wrapper,
 HomeSection,
 ImagesWrap,
 Image,
 Container,
 HeroWrap,
 ButtonWrap,
} from './Hero.styled';

import { HashLink as Link } from 'react-router-hash-link';

import bgImageDesktop from '../../images/home-dashboard@1x.png';
import bgImageDesktopRetina from '../../images/home-dashboard@2x.png';

const Hero = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <HomeSection id="chatbot">
   <Container>
    <HeroWrap>
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
      <ButtonWrap to="/chat">
       <Button variant="primary" text={'Get started'} />
      </ButtonWrap>
      <Link to="/#subscribes">
       <Button variant="secondary" text={'Book a demo'} />
      </Link>
     </Wrapper>
     <ImagesWrap>
      <Image
       src={isRetina ? bgImageDesktopRetina : bgImageDesktop}
       alt="Home img block"
      />
     </ImagesWrap>
    </HeroWrap>
   </Container>
  </HomeSection>
 );
};

export default Hero;
