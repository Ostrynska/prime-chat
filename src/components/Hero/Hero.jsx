import { Button } from '../Button/Button';
import { PreTitle } from '../PreTitle/PreTitle';
import {
 MainTitle,
 SpanTitle,
 SpanTitleHilight,
 Title,
 Wrapper,
 HomeSection,
 //  HomePageImage,
} from './Hero.styled';

const Hero = () => {
 return (
  <HomeSection>
   <Wrapper>
    <PreTitle variant="primary" text={'Chatbot'} />
    <MainTitle>
     Offer the <br />
     best <SpanTitle>Conversational</SpanTitle>
     <SpanTitleHilight> Experience</SpanTitleHilight> With Our Primchat Software
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
   {/* <HomePageImage /> */}
  </HomeSection>
 );
};

export default Hero;
