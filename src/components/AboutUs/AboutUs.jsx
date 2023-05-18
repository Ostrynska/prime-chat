import { Container } from '../Container/Conteiner';
import {
 Section,
 Content,
 Title,
 TitleSpan,
 PostWrap,
 Post,
 List,
 ListItem,
 Check,
 CheckText,
 //  AboutUsImage,
} from './AboutUs.styled';
import { PreTitle } from '../PreTitle/PreTitle';
import { Button } from '../Button/Button';

import aboutUsDesktop from '../../images/about-us/aboutUsDesktop@1x.png';
import aboutUsDesktopRetina from '../../images/about-us/aboutUsDesktop@2x.png';

const AboutUs = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <Section>
   <Container style={{ display: 'flex' }}>
    <Content>
     <PreTitle
      variant="primary"
      text={'About Our Prime Chat'}
      style={{ width: 275 }}
     />
     <Title>
      A better way to <TitleSpan>talk</TitleSpan> with your customers
     </Title>
     <PostWrap>
      <Post style={{ marginBottom: 40 }}>
       Provide the best, most intuitive support across all channels. Proactively
       understand customer needs to serve excellence the first time. Save time
       and reduce repetitive tasks. Help agents rapidly resolveworkforce
       automation and knowledge.
      </Post>
      <Post>
       Save time and reduce repetitive tasks. Help agents rapidly
       resolveworkforce automation and knowledge.
      </Post>
     </PostWrap>
     <List>
      <ListItem color="inputOrange">
       <Check color="checkOrange" />
       <CheckText color="checkOrange">CONVERT MORE CUSTOMERS</CheckText>
      </ListItem>
      <ListItem color="inputPurple">
       <Check color="checkPurple" />
       <CheckText color="checkPurple">ENGAGE ACROSS EVERY TOUCHPOINT</CheckText>
      </ListItem>
      <ListItem color="inputGreen">
       <Check color="checkGreen" />
       <CheckText color="checkGreen">SUPPORT CUSTOMERS AT SCALE</CheckText>
      </ListItem>
     </List>
     <Button variant="primary" text={'Try for free'} />
    </Content>
    {/* <AboutUsImage /> */}
    <img
     src={isRetina ? aboutUsDesktopRetina : aboutUsDesktop}
     alt="About us img block"
     height={909}
     width={902}
     style={{
      position: 'absolute',
      top: '-20px',
      right: '20px',
      zIndex: '4',
     }}
    />
   </Container>
  </Section>
 );
};

export default AboutUs;
