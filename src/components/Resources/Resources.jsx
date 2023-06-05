import { ReactSVG } from 'react-svg';

import { Container } from '../Container/Conteiner';
import { PreTitle } from '../PreTitle/PreTitle';
import { Button } from '../Button/Button';
import {
 Section,
 SpanTitle,
 Title,
 List,
 Item,
 ItemContent,
 ItemTitle,
 ItemText,
 ItemImageFirst,
 ItemImageSecond,
 ItemImageThird,
} from './Resources.styled';

import { HashLink as Link } from 'react-router-hash-link';

import iconChat from '../../images/resources/resourcesIconChat.svg';
import chatImage from '../../images/resources/chat@1x.png';
import chatImageRetina from '../../images/resources/chat@2x.png';

import iconTraining from '../../images/resources/resourcesIconTraining.svg';
import trainingImage from '../../images/resources/training@1x.png';
import trainingImageRetina from '../../images/resources/training@2x.png';

import iconSupport from '../../images/resources/resourcesIconSupport.svg';
import supportImage from '../../images/resources/customer@1x.png';
import supportImageRetina from '../../images/resources/customer@2x.png';

const Resources = () => {
 const isRetina = window.devicePixelRatio > 1;

 return (
  <Section id="resources">
   <Container>
    <div
     style={{
      textAlign: 'center',
     }}
    >
     <PreTitle variant="primary" text={'Resources'} />
     <Title>
      Supercharge your workflow with <SpanTitle>Powerful Resources</SpanTitle>
     </Title>
    </div>
    <List>
     <Item>
      <ItemContent>
       <ReactSVG src={iconChat} />
       <ItemTitle>Provide multi-channel customer support 24/7</ItemTitle>
       <ItemText>
        Stay in touch with customers anytime, wherever you are, on web and
        mobile. Assist them via chat, email, and offer a 24/7 customer
        self-service knowledge base.
       </ItemText>
       <Link style={{ width: 245 }} smooth to="/#subscribes">
        <Button variant="primary" text={'Get started'} />
       </Link>
      </ItemContent>
      <ItemImageFirst src={isRetina ? chatImageRetina : chatImage} alt="Chat" />
     </Item>

     <Item>
      <ItemImageSecond
       src={isRetina ? trainingImageRetina : trainingImage}
       alt="Training"
      />
      <ItemContent>
       <ReactSVG src={iconTraining} />
       <ItemTitle>Free training and demos from the Primachat team</ItemTitle>
       <ItemText>
        Stay in touch with customers anytime, wherever you are, on web and
        mobile. Assist them via chat, email, and offer a 24/7 customer
        self-service knowledge base.
       </ItemText>
       <Link style={{ width: 245 }} smooth to="/#subscribes">
        <Button variant="primary" text={'Get started'} />
       </Link>
      </ItemContent>
     </Item>

     <Item>
      <ItemContent>
       <ReactSVG src={iconSupport} />
       <ItemTitle>
        Live chat, about support, marketing, product, and more
       </ItemTitle>
       <ItemText>
        Stay in touch with customers anytime, wherever you are, on web and
        mobile. Assist them via chat, email, and offer a 24/7 customer
        self-service knowledge base.
       </ItemText>
       <Link style={{ width: 245 }} smooth to="/#subscribes">
        <Button variant="primary" text={'Get started'} />
       </Link>
      </ItemContent>
      <ItemImageThird
       src={isRetina ? supportImageRetina : supportImage}
       alt="Support"
      />
     </Item>
    </List>
   </Container>
  </Section>
 );
};

export default Resources;
