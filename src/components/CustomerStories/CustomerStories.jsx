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
 CompanyLogo,
 UserPic,
} from './CustomerStories.styled';

import Responsive from '../Slider/Slider';

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
    <Responsive>
     <Item>
      <TitleWrap>
       <UserPic
        src={isRetina ? userImageOneRetina : userImageOne}
        alt="Alex Bass"
        width={94}
       />
       <User>
        <UserName>Alex Bass</UserName>
        <UserPosition>Founder & Head of Product</UserPosition>
       </User>
       <CompanyLogo src={logoOne} alt="Company logo" />
      </TitleWrap>
      <Comment>
       “Primchat was the modern customer service software solution that was
       exactly what we were looking for. From the feature set to the pricing
       model primchat great for us.”
      </Comment>
     </Item>
     <Item>
      <TitleWrap>
       <UserPic
        src={isRetina ? userImageTwoRetina : userImageTwo}
        alt="Rose Simmon"
        width={94}
       />
       <User>
        <UserName>Rose Simmon</UserName>
        <UserPosition>Founder & Head of Product</UserPosition>
       </User>
       <CompanyLogo src={logoTwo} alt="Company logo" />
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
       <UserPic
        src={isRetina ? userImageThreeRetina : userImageThree}
        alt="Son Heung-min"
        width={94}
       />
       <User>
        <UserName>Son Heung-min</UserName>
        <UserPosition>Founder & Head of Product</UserPosition>
       </User>
       <CompanyLogo src={logoThree} alt="Company logo" />
      </TitleWrap>
      <Comment>
       “Modern customer service software solution that was exactly what we were
       looking for. From the feature set to the pricing model primchat great for
       us.”
      </Comment>
     </Item>
    </Responsive>
   </Container>
  </Section>
 );
};

export default CustomerStories;
