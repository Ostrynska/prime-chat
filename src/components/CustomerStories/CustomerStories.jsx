import { Container } from '../Container/Conteiner';
import { PreTitle } from '../PreTitle/PreTitle';
import {
 SpanTitle,
 Title,
 Wrapper,
 Section,
 Item,
 TitleWrap,
 Comment,
 User,
 UserName,
 UserPosition,
} from './CustomerStories.styled';

import CenterMode from '../Slider/Slider';

import userImageOne from '../../images/customer-stories/user1@1x.jpg';
import userImageOneRetina from '../../images/customer-stories/user1@2x.jpg';
import logoOne from '../../images/customer-stories/companyLogo1.svg';
import userImageTwo from '../../images/customer-stories/user2@1x.jpg';
import userImageTwoRetina from '../../images/customer-stories/user2@2x.jpg';
import logoTwo from '../../images/customer-stories/companyLogo2.svg';
import userImageThree from '../../images/customer-stories/user3@1x.jpg';
import userImageThreeRetina from '../../images/customer-stories/user3@2x.jpg';
import logoThree from '../../images/customer-stories/companyLogo3.svg';

const CustomerStories = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <Section id="testimonials">
   <Container>
    <Wrapper>
     <PreTitle variant="primary" text={'Testimonials'} />
     <Title>
      About Customer <SpanTitle>stories</SpanTitle>
     </Title>
    </Wrapper>
    <CenterMode>
     <Item>
      <TitleWrap>
       <img
        src={isRetina ? userImageOneRetina : userImageOne}
        alt="Alex Bass"
        style={{ borderRadius: '50%' }}
        width={94}
       />
       <User>
        <UserName>Alex Bass</UserName>
        <UserPosition>Founder & Head of Product</UserPosition>
       </User>
       <img
        src={logoOne}
        alt="Company logo"
        style={{
         marginLeft: 'auto',
        }}
       />
      </TitleWrap>
      <Comment>
       “Primchat was the modern customer service software solution that was
       exactly what we were looking for. From the feature set to the pricing
       model primchat great for us.”
      </Comment>
     </Item>
     <Item>
      <TitleWrap>
       <img
        src={isRetina ? userImageTwoRetina : userImageTwo}
        alt="Rose Simmon"
        style={{ borderRadius: '50%' }}
        width={94}
       />
       <User>
        <UserName>Rose Simmon</UserName>
        <UserPosition>Founder & Head of Product</UserPosition>
       </User>
       <img
        src={logoTwo}
        alt="Company logo"
        style={{
         marginLeft: 'auto',
        }}
       />
      </TitleWrap>
      <Comment>
       “Our team was able to teach themselves primchat in a day. It's like using
       a shared email inbox — just way more robust and better looking.
       <br />
       Primchat was the modern customer service software solution that was
       exactly what we were looking.“
      </Comment>
     </Item>
     <Item>
      <TitleWrap>
       <img
        src={isRetina ? userImageThreeRetina : userImageThree}
        alt="Son Heung-min"
        style={{ borderRadius: '50%' }}
        width={94}
       />
       <User>
        <UserName>Son Heung-min</UserName>
        <UserPosition>Founder & Head of Product</UserPosition>
       </User>
       <img
        src={logoThree}
        alt="Company logo"
        style={{
         marginLeft: 'auto',
        }}
       />
      </TitleWrap>
      <Comment>
       “Modern customer service software solution that was exactly what we were
       looking for. From the feature set to the pricing model primchat great for
       us.”
      </Comment>
     </Item>
    </CenterMode>
   </Container>
  </Section>
 );
};

export default CustomerStories;
