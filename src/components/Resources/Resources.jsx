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
} from './Resources.styled';

import iconChat from '../../images/resources/resourcesIconChat.svg';
import chatImage from '../../images/resources/chat@1x.png';
import iconTraining from '../../images/resources/resourcesIconTraining.svg';
import trainingImage from '../../images/resources/training@1x.png';
import iconSupport from '../../images/resources/resourcesIconSupport.svg';
import supportImage from '../../images/resources/customer@1x.png';

const Resources = () => {
 return (
  <Section>
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
       <div style={{ width: 245 }}>
        <Button variant="primary" text={'Get started'} />
       </div>
      </ItemContent>
      <img
       src={chatImage}
       alt="Chat"
       style={{ margin: '0 auto' }}
       width={703}
      />
     </Item>

     <Item>
      <img src={trainingImage} alt="Training" width={640} />
      <ItemContent style={{ margin: '0 auto' }}>
       <ReactSVG src={iconTraining} />
       <ItemTitle>Free training and demos from the Primachat team</ItemTitle>
       <ItemText>
        Stay in touch with customers anytime, wherever you are, on web and
        mobile. Assist them via chat, email, and offer a 24/7 customer
        self-service knowledge base.
       </ItemText>
       <div style={{ width: 245 }}>
        <Button variant="primary" text={'Get started'} />
       </div>
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
       <div style={{ width: 245 }}>
        <Button variant="primary" text={'Get started'} />
       </div>
      </ItemContent>
      <img
       src={supportImage}
       alt="Support"
       style={{ margin: '0 auto' }}
       width={762}
      />
     </Item>
    </List>
   </Container>
  </Section>
 );
};

export default Resources;
