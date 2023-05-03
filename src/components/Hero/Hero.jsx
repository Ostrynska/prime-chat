import { Container } from '../Container/Conteiner';

import {
 TitleWrap,
 TitleWrapText,
 MainTitle,
 SpanTitle,
 SpanTitleHilight,
 Title,
 ButtonStart,
 ButtonDemo,
 Wrapper,
 HomeWrapper,
 //  HomePageImage,
} from './Hero.styled';

const Hero = () => {
 return (
  <Container>
   <HomeWrapper>
    <Wrapper>
     <TitleWrap>
      <TitleWrapText>Chatbot</TitleWrapText>
     </TitleWrap>
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
     <ButtonStart>Get started</ButtonStart>
     <ButtonDemo>Book a demo</ButtonDemo>
    </Wrapper>
    {/* <HomePageImage /> */}
   </HomeWrapper>
  </Container>
 );
};

export default Hero;
